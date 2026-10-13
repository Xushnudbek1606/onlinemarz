import { useMemo, useState } from 'react'
import { useLectures } from './hooks/useLectures'
import Header from './components/Header'
import HomeScreen from './components/HomeScreen'
import SubjectLectures from './components/SubjectLectures'
import LectureView from './components/LectureView'
import PresentationScreen from './components/PresentationScreen'
import LectureForm from './components/LectureForm'
import { SUBJECTS } from './data/lectures'

export default function App() {
  const store = useLectures()
  const [route, setRoute] = useState({ name: 'home' })

  const navigate = (name, params = {}) => {
    setRoute({ name, params })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const subject = useMemo(() => {
    const s = route.params?.subjectId
    return s ? SUBJECTS.find((x) => x.id === s) || null : null
  }, [route])

  const lecture = useMemo(() => {
    const id = route.params?.lectureId
    if (!id) return null
    const found = store.lectures.find((l) => l.id === id)
    if (!found) return null
    const subj = SUBJECTS.find((s) => s.id === found.subjectId)
    return { ...found, subjectName: subj ? subj.name : 'Noma\'lum fan' }
  }, [route, store.lectures])

  let screen
  switch (route.name) {
    case 'home':
      screen = (
        <HomeScreen
          lectures={store.lectures}
          onOpenSubject={(id) => navigate('subject', { subjectId: id })}
          onOpenLecture={(id) => navigate('lecture', { lectureId: id })}
        />
      )
      break
    case 'subject':
      screen = subject ? (
        <SubjectLectures
          subject={subject}
          lectures={store.lectures.filter((l) => l.subjectId === subject.id)}
          onBack={() => navigate('home')}
          onOpenLecture={(id) => navigate('lecture', { lectureId: id })}
          onAddNew={() => navigate('add', { subjectId: subject.id })}
        />
      ) : (
        <HomeScreen lectures={store.lectures} onOpenSubject={(id) => navigate('subject', { subjectId: id })} onOpenLecture={(id) => navigate('lecture', { lectureId: id })} />
      )
      break
    case 'lecture':
      screen = lecture ? (
        <LectureView
          lecture={lecture}
          onBack={() => navigate('subject', { subjectId: lecture.subjectId })}
          onEdit={() => navigate('add', { lectureId: lecture.id })}
          onPresent={() => navigate('present', { lectureId: lecture.id })}
        />
      ) : (
        <HomeScreen lectures={store.lectures} onOpenSubject={(id) => navigate('subject', { subjectId: id })} onOpenLecture={(id) => navigate('lecture', { lectureId: id })} />
      )
      break
    case 'present':
      screen = lecture ? (
        <PresentationScreen lecture={lecture} onExit={() => navigate('lecture', { lectureId: lecture.id })} />
      ) : (
        <HomeScreen lectures={store.lectures} onOpenSubject={(id) => navigate('subject', { subjectId: id })} onOpenLecture={(id) => navigate('lecture', { lectureId: id })} />
      )
      break
    case 'add':
      screen = (
        <LectureForm
          store={store}
          subjectId={route.params.subjectId || (lecture && lecture.subjectId)}
          editLecture={lecture}
          onBack={() => navigate(lecture ? 'lecture' : 'home', lecture ? { lectureId: lecture.id } : {})}
          onSave={(id, subjectId) => navigate('lecture', { lectureId: id })}
        />
      )
      break
    default:
      screen = (
        <HomeScreen lectures={store.lectures} onOpenSubject={(id) => navigate('subject', { subjectId: id })} onOpenLecture={(id) => navigate('lecture', { lectureId: id })} />
      )
  }

  return (
    <div className="app">
      <Header onHome={() => navigate('home')} />
      <main className="main">{screen}</main>
      <footer className="footer">student.uz – ma'ruzalar to'plami · dars o'tish uchun</footer>
    </div>
  )
}