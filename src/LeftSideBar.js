import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LeftSidebar = ({handleSubmit}) => {
    console.log(handleSubmit);
    return (
        <>
        <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="tp">
                <Form.Label>Trade Price : </Form.Label>
                <Form.Control type="number" placeholder="Enter Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cm">
                <Form.Label>Commision % : </Form.Label>
                <Form.Control
                    type="number"
                    step="any"
                    placeholder="Enter Number"
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="re">
                <Form.Label>Referral % : </Form.Label>
                <Form.Control
                    type="number"
                    step="any"
                    placeholder="Enter Number"
                />
                </Form.Group>

                <Form.Group className="mb-3" controm lId="mf">
                <Form.Label>Misc. Fees % : </Form.Label>
                <Form.Control
                    type="number"
                    placeholder=""
                    defaultValue={10}
                    readOnly
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ts">
                <Form.Label>Trade Share % : </Form.Label>
                <Form.Control
                    type="number"
                    placeholder=""
                    defaultValue={40}
                    readOnly
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dl">
                <Form.Label>Dalal % : </Form.Label>
                <Form.Control
                    type="number"
                    placeholder=""
                    defaultValue={60}
                    readOnly
                />
                </Form.Group>

                <Button type="submit">Submit form</Button>
            </Form>
        </>
    );
}

export default LeftSidebar;