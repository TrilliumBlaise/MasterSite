import { Card } from 'react-bootstrap'

type ProjectItemProp = {
  title: string
  src: string
  image: string
  description: string
}

export function ProjectItem({ title, src, image, description }: ProjectItemProp) {
  function sendToSite(source: string) {
    window.location.href = source
  }

  return (
    <Card onClick={() => sendToSite(src)} className="flex-row" bg="light" border="warning" style={{ cursor: 'pointer', border: '3px solid black' }}>
      <Card.Img className="mt-3 ms-3" height="100px" src={image} style={{ width: '100px' }}></Card.Img>
      <Card.Body>
        <Card.Title className="fs-2">{title}</Card.Title>
        <Card.Text className="fs-4">{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}
