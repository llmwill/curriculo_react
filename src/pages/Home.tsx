import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import TextField from '@mui/material/TextField'
import { useAppContext } from '../contexts/AppContext'

function EducationRow({
  index,
  education,
  userId,
}: {
  index: number
  education: Education
  userId: number
}) {
  const { updateEducation, removeEducation } = useAppContext()
  const [isEditing, setIsEditing] = useState(false)
  const [editedEducation, setEditedEducation] = useState(education)

  const handleSave = () => {
    updateEducation(userId, education.id, editedEducation)
    setIsEditing(false)
  }

  return (
    <TableRow key={education.id}>
      <TableCell>{index}</TableCell>
      <TableCell>
        {isEditing ? (
          <TextField
            size="small"
            value={editedEducation.institution}
            onChange={(e) =>
              setEditedEducation({
                ...editedEducation,
                institution: e.target.value,
              })
            }
          />
        ) : (
          education.institution
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <TextField
            size="small"
            value={editedEducation.course}
            onChange={(e) =>
              setEditedEducation({ ...editedEducation, course: e.target.value })
            }
          />
        ) : (
          education.course
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <TextField
            size="small"
            value={editedEducation.period}
            onChange={(e) =>
              setEditedEducation({ ...editedEducation, period: e.target.value })
            }
          />
        ) : (
          education.period
        )}
      </TableCell>
      <TableCell align="right">
        <IconButton
          size="small"
          onClick={() => {
            if (isEditing) {
              handleSave()
            } else {
              setIsEditing(true)
            }
          }}
        >
          {isEditing ? <SaveIcon /> : <EditIcon />}
        </IconButton>
        <IconButton
          size="small"
          onClick={() => removeEducation(userId, education.id)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

function ExperienceRow({
  index,
  experience,
  userId,
}: {
  index: number
  experience: Experience
  userId: number
}) {
  const { updateExperience, removeExperience } = useAppContext()
  const [isEditing, setIsEditing] = useState(false)
  const [editedExperience, setEditedExperience] = useState(experience)

  const handleSave = () => {
    updateExperience(userId, experience.id, editedExperience)
    setIsEditing(false)
  }

  return (
    <TableRow key={experience.id}>
      <TableCell>{index}</TableCell>
      <TableCell>
        {isEditing ? (
          <TextField
            size="small"
            value={editedExperience.company}
            onChange={(e) =>
              setEditedExperience({
                ...editedExperience,
                company: e.target.value,
              })
            }
          />
        ) : (
          experience.company
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <TextField
            size="small"
            value={editedExperience.position}
            onChange={(e) =>
              setEditedExperience({
                ...editedExperience,
                position: e.target.value,
              })
            }
          />
        ) : (
          experience.position
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <TextField
            size="small"
            value={editedExperience.period}
            onChange={(e) =>
              setEditedExperience({
                ...editedExperience,
                period: e.target.value,
              })
            }
          />
        ) : (
          experience.period
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <TextField
            size="small"
            value={editedExperience.description}
            onChange={(e) =>
              setEditedExperience({
                ...editedExperience,
                description: e.target.value,
              })
            }
          />
        ) : (
          experience.description
        )}
      </TableCell>
      <TableCell align="right">
        <IconButton
          size="small"
          onClick={() => {
            if (isEditing) {
              handleSave()
            } else {
              setIsEditing(true)
            }
          }}
        >
          {isEditing ? <SaveIcon /> : <EditIcon />}
        </IconButton>
        <IconButton
          size="small"
          onClick={() => removeExperience(userId, experience.id)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

function ProjectRow({
  index,
  project,
  userId,
}: {
  index: number
  project: Project
  userId: number
}) {
  const { updateProject, removeProject } = useAppContext()
  const [isEditing, setIsEditing] = useState(false)
  const [editedProject, setEditedProject] = useState(project)

  const handleSave = () => {
    updateProject(userId, project.id, editedProject)
    setIsEditing(false)
  }

  return (
    <TableRow key={project.id}>
      <TableCell>{index}</TableCell>
      <TableCell>
        {isEditing ? (
          <TextField
            size="small"
            value={editedProject.name}
            onChange={(e) =>
              setEditedProject({ ...editedProject, name: e.target.value })
            }
          />
        ) : (
          project.name
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <TextField
            size="small"
            value={editedProject.description}
            onChange={(e) =>
              setEditedProject({
                ...editedProject,
                description: e.target.value,
              })
            }
          />
        ) : (
          project.description
        )}
      </TableCell>
      <TableCell align="right">
        <IconButton
          size="small"
          onClick={() => {
            if (isEditing) {
              handleSave()
            } else {
              setIsEditing(true)
            }
          }}
        >
          {isEditing ? <SaveIcon /> : <EditIcon />}
        </IconButton>
        <IconButton
          size="small"
          onClick={() => removeProject(userId, project.id)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

function SkillRow({
  index,
  skill,
  onUpdate,
  onDelete,
}: {
  index: number
  skill: string
  onUpdate: (newSkill: string) => void
  onDelete: () => void
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedSkill, setEditedSkill] = useState(skill)

  const handleSave = () => {
    onUpdate(editedSkill)
    setIsEditing(false)
  }

  return (
    <TableRow key={index}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        {isEditing ? (
          <TextField
            size="small"
            value={editedSkill}
            onChange={(e) => setEditedSkill(e.target.value)}
          />
        ) : (
          skill
        )}
      </TableCell>
      <TableCell align="right">
        <IconButton
          size="small"
          onClick={() => {
            if (isEditing) {
              handleSave()
            } else {
              setIsEditing(true)
            }
          }}
        >
          {isEditing ? <SaveIcon /> : <EditIcon />}
        </IconButton>
        <IconButton size="small" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

function UserRow({ index, user }: { index: number; user: User }) {
  const { updateUser, deleteUser, addEducation, addExperience, addProject } =
    useAppContext()
  const [open, setOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState(user)

  const handleUserSave = () => {
    updateUser(user.id, editedUser)
    setIsEditing(false)
  }

  const handleAddEducation = () => {
    const newEducation: Education = {
      id: Date.now(),
      institution: '',
      course: '',
      period: '',
      userId: user.id,
    }
    addEducation(user.id, newEducation)
  }

  const handleAddExperience = () => {
    const newExperience: Experience = {
      id: Date.now(),
      company: '',
      position: '',
      period: '',
      description: '',
      userId: user.id,
    }
    addExperience(user.id, newExperience)
  }

  const handleAddProject = () => {
    const newProject: Project = {
      id: Date.now(),
      name: '',
      description: '',
      userId: user.id,
    }
    addProject(user.id, newProject)
  }

  const handleAddSkill = () => {
    const newSkills = [...editedUser.skills, '']
    setEditedUser({ ...editedUser, skills: newSkills })
    updateUser(user.id, { skills: newSkills })
  }

  const handleUpdateSkill = (skillIndex: number, newSkill: string) => {
    const newSkills = [...editedUser.skills]
    newSkills[skillIndex] = newSkill
    setEditedUser({ ...editedUser, skills: newSkills })
    updateUser(user.id, { skills: newSkills })
  }

  const handleRemoveSkill = (skillIndex: number) => {
    const newSkills = editedUser.skills.filter(
      (_, index) => index !== skillIndex
    )
    setEditedUser({ ...editedUser, skills: newSkills })
    updateUser(user.id, { skills: newSkills })
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{index}</TableCell>
        <TableCell>
          {isEditing ? (
            <TextField
              size="small"
              value={editedUser.name}
              onChange={(e) =>
                setEditedUser({ ...editedUser, name: e.target.value })
              }
            />
          ) : (
            user.name
          )}
        </TableCell>
        <TableCell>
          {isEditing ? (
            <TextField
              size="small"
              value={editedUser.email}
              onChange={(e) =>
                setEditedUser({ ...editedUser, email: e.target.value })
              }
            />
          ) : (
            user.email
          )}
        </TableCell>
        <TableCell>
          {isEditing ? (
            <TextField
              size="small"
              value={editedUser.phone}
              onChange={(e) =>
                setEditedUser({ ...editedUser, phone: e.target.value })
              }
            />
          ) : (
            user.phone
          )}
        </TableCell>
        <TableCell align="right">
          <IconButton
            size="small"
            onClick={() => {
              if (isEditing) {
                handleUserSave()
              } else {
                setIsEditing(true)
              }
            }}
          >
            {isEditing ? <SaveIcon /> : <EditIcon />}
          </IconButton>
          <IconButton size="small" onClick={() => deleteUser(user.id)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Educação
              </Typography>
              <Table size="small" aria-label="educations">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Instituição</TableCell>
                    <TableCell>Curso</TableCell>
                    <TableCell>Período</TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={handleAddEducation}>
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user.educations.map((education, index) => (
                    <EducationRow
                      key={index}
                      index={index + 1}
                      education={education}
                      userId={user.id}
                    />
                  ))}
                </TableBody>
              </Table>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ marginTop: 2 }}
              >
                Experiência
              </Typography>
              <Table size="small" aria-label="experiences">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Empresa</TableCell>
                    <TableCell>Cargo</TableCell>
                    <TableCell>Período</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={handleAddExperience}>
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user.experiences.map((experience, index) => (
                    <ExperienceRow
                      key={index}
                      index={index + 1}
                      experience={experience}
                      userId={user.id}
                    />
                  ))}
                </TableBody>
              </Table>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ marginTop: 2 }}
              >
                Projetos
              </Typography>
              <Table size="small" aria-label="projects">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={handleAddProject}>
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user.projects.map((project, index) => (
                    <ProjectRow
                      key={index}
                      index={index + 1}
                      project={project}
                      userId={user.id}
                    />
                  ))}
                </TableBody>
              </Table>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ marginTop: 2 }}
              >
                Skills
              </Typography>
              <Table size="small" aria-label="skills">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell />
                    <TableCell align="right">
                      <IconButton size="small" onClick={handleAddSkill}>
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {editedUser.skills.map((skill, index) => (
                    <SkillRow
                      key={index}
                      index={index}
                      skill={skill}
                      onUpdate={(newSkill) =>
                        handleUpdateSkill(index, newSkill)
                      }
                      onDelete={() => handleRemoveSkill(index)}
                    />
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default function Home() {
  const { users, addUser } = useAppContext()

  const handleAddUser = () => {
    const newUser: User = {
      id: Date.now(),
      name: '',
      email: '',
      phone: '',
      educations: [],
      experiences: [],
      skills: [],
      projects: [],
    }
    addUser(newUser)
  }

  return (
    <Container>
      <TableContainer component={Paper} sx={{ marginY: 12 }}>
        <Table aria-label="collapsible table">
          <caption>Total: {users.length}</caption>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>#</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell align="right">
                <IconButton size="small" onClick={handleAddUser}>
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <UserRow key={user.id} index={index + 1} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
