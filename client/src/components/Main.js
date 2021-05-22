import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Container, ListGroup, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';


const Main = () => {
    return (

        <div>
            <header>
                {/* <h2>Playground Finder</h2> */}
                <Container>

                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <h4>Filter Categories</h4>
                            {/*--------- Age Group ---------*/}
                            <ListGroup.Item>
                                <Form>
                                    <FormGroup>
                                        <FormLabel>Age group</FormLabel>
                                        <FormControl as="select">
                                            <option>1-5</option>
                                            <option>6-10</option>
                                            <option>10-15</option>
                                        </FormControl>
                                    </FormGroup>
                                </Form>
                            </ListGroup.Item>

                            {/*--------- Accessibility ---------*/}
                            <ListGroup.Item>
                                <Form>
                                    <FormGroup>
                                        <FormLabel>Accessibility</FormLabel>
                                        <FormControl as="select">
                                            <option>Wheel Chair Access</option>
                                            <option>Regular Parking</option>
                                            <option>Handicap Parking</option>
                                        </FormControl>
                                    </FormGroup>
                                </Form>
                            </ListGroup.Item>

                            {/*--------- Ground Cover ---------*/}
                            <ListGroup.Item>
                                <Form>
                                    <FormGroup>
                                        <FormLabel>Ground Cover</FormLabel>
                                        <FormControl as="select">
                                            <option>Artificial Turf</option>
                                            <option>Asphalt/Concrete</option>
                                            <option>Rubber Chips</option>
                                            <option>Rubber Matted</option>
                                        </FormControl>
                                    </FormGroup>
                                </Form>
                            </ListGroup.Item>

                            {/*--------- Size ---------*/}
                            <ListGroup.Item>
                                <Form>
                                    <FormGroup>
                                        <FormLabel>Size</FormLabel>
                                        <FormControl as="select">
                                            <option>Large</option>
                                            <option>Medium</option>
                                            <option>Small</option>
                                        </FormControl>
                                    </FormGroup>
                                </Form>
                            </ListGroup.Item>

                            {/*--------- Quadrant ---------*/}
                            <ListGroup.Item>
                                <Form>
                                    <FormGroup>
                                        <FormLabel>Quadrant</FormLabel>
                                        <FormControl as="select">
                                            <option>NW Calgary</option>
                                            <option>NE Calgary</option>
                                            <option>SE Calgary</option>
                                            <option>SW Calgary</option>
                                        </FormControl>
                                    </FormGroup>
                                </Form>
                            </ListGroup.Item>


                        </ListGroup>
                    </Card>

                </Container>
                <Link to="/tutorial">
                    <Button className="ui primary button">Submit</Button>
                </Link>

            </header>
        </div >





    )
};

export default Main;