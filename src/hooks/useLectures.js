import { useEffect, useState } from 'react'
import { SAMPLE_LECTURES } from '../data/lectures'

const STORAGE_KEY = 'maruza_html_lectures_v1'

function loadLectures() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) {
    console.error('Lectures yuklab bo\'lmadi:', e)
  }
  return SAMPLE_LECTURES
}

export function useLectures() {
  const [lectures, setLectures] = useState(() => loadLectures())

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lectures))
    } catch (e) {
      console.error('Lectures saqlanmadi:', e)
    }
  }, [lectures])

  const addLecture = (lecture) => {
    const newLecture = {
      ...lecture,
      id: 'l-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
    }
    setLectures((prev) => [newLecture, ...prev])
    return newLecture.id
  }

  const updateLecture = (id, data) => {
    setLectures((prev) => prev.map((l) => (l.id === id ? { ...l, ...data } : l)))
  }

  const deleteLecture = (id) => {
    setLectures((prev) => prev.filter((l) => l.id !== id))
  }

  const resetLectures = () => {
    setLectures(SAMPLE_LECTURES)
  }

  return { lectures, addLecture, updateLecture, deleteLecture, resetLectures }
}

export function getLectureById(lectures, id) {
  return lectures.find((l) => l.id === id)
}

export function getLecturesBySubject(lectures, subjectId) {
  return lectures.filter((l) => l.subjectId === subjectId)
}