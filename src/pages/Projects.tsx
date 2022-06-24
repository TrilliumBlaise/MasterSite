import { Col, Row } from 'react-bootstrap'
import { ProjectItem } from '../components/ProjectItem'
import { PROJECTS } from '../data/Projects'
import { toggleBackgroundSize } from '../utilities/toggleBackgroundSize'

export function Projects() {
  toggleBackgroundSize('100% 100%')
  return (
    <>
      <Row lg={2} md={1} sm={1} className="g-2">
        {PROJECTS.map(project => (
          <Col className="d-flex" key={project.id}>
            <ProjectItem {...project} />
          </Col>
        ))}
      </Row>
    </>
  )
}
