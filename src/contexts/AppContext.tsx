import React from 'react'

interface AppContextType {
  users: User[]
  addUser: (user: User) => void
  updateUser: (id: number, updatedUser: Partial<User>) => void
  deleteUser: (id: number) => void
  addEducation: (userId: number, education: Education) => void
  updateEducation: (
    userId: number,
    educationId: number,
    updatedEducation: Partial<Education>
  ) => void
  removeEducation: (userId: number, educationId: number) => void
  addExperience: (userId: number, experience: Experience) => void
  updateExperience: (
    userId: number,
    experienceId: number,
    updatedExperience: Partial<Experience>
  ) => void
  removeExperience: (userId: number, experienceId: number) => void
  addProject: (userId: number, project: Project) => void
  updateProject: (
    userId: number,
    projectId: number,
    updatedProject: Partial<Project>
  ) => void
  removeProject: (userId: number, projectId: number) => void
}

const AppContext = React.createContext({} as AppContextType)

export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [users, setUsers] = React.useState<User[]>([])

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user])
  }

  const updateUser = (id: number, updatedUser: Partial<User>) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
    )
  }

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id))
  }

  const addEducation = (userId: number, education: Education) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? { ...user, educations: [...user.educations, education] }
          : user
      )
    )
  }

  const updateEducation = (
    userId: number,
    educationId: number,
    updatedEducation: Partial<Education>
  ) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? {
              ...user,
              educations: user.educations.map((e) =>
                e.id === educationId ? { ...e, ...updatedEducation } : e
              ),
            }
          : user
      )
    )
  }

  const removeEducation = (userId: number, educationId: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? {
              ...user,
              educations: user.educations.filter((e) => e.id !== educationId),
            }
          : user
      )
    )
  }

  const addExperience = (userId: number, experience: Experience) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? { ...user, experiences: [...user.experiences, experience] }
          : user
      )
    )
  }

  const updateExperience = (
    userId: number,
    experienceId: number,
    updatedExperience: Partial<Experience>
  ) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? {
              ...user,
              experiences: user.experiences.map((e) =>
                e.id === experienceId ? { ...e, ...updatedExperience } : e
              ),
            }
          : user
      )
    )
  }

  const removeExperience = (userId: number, experienceId: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? {
              ...user,
              experiences: user.experiences.filter(
                (e) => e.id !== experienceId
              ),
            }
          : user
      )
    )
  }

  const addProject = (userId: number, project: Project) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? { ...user, projects: [...user.projects, project] }
          : user
      )
    )
  }

  const updateProject = (
    userId: number,
    projectId: number,
    updatedProject: Partial<Project>
  ) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? {
              ...user,
              projects: user.projects.map((p) =>
                p.id === projectId ? { ...p, ...updatedProject } : p
              ),
            }
          : user
      )
    )
  }

  const removeProject = (userId: number, projectId: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? {
              ...user,
              projects: user.projects.filter((p) => p.id !== projectId),
            }
          : user
      )
    )
  }

  return (
    <AppContext.Provider
      value={{
        users,
        addUser,
        updateUser,
        deleteUser,
        addEducation,
        updateEducation,
        removeEducation,
        addExperience,
        updateExperience,
        removeExperience,
        addProject,
        updateProject,
        removeProject,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return React.useContext(AppContext)
}
