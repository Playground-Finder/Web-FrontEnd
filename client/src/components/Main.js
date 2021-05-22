import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Container, ListGroup, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';


const Main = () => {
    return (

        <div class="col d-flex justify-content-center">
            <header>

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
                                            <option>Junior (2-5)</option>
                                            <option>Senior (5-12)</option>
                                            <option>Junior and Senior (2-12)</option>
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
                                            <option>Rock Cover</option>
                                            <option>Rubber Chips</option>
                                            <option>Rubber Matted</option>
                                            <option>Sand</option>
                                            <option>Wood Cover</option>
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
                                            <option>Small</option>
                                            <option>Large</option>
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
                        <br />
                        <Link to="/fileredItems">
                            <Button className="ui primary button">Submit</Button>
                        </Link>
                        <br />
                    </Card>
                </Container>

            </header>
        </div >

    )
};

export default Main;