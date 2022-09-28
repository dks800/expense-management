import {
  Container,
  Header,
  Segment,
  Statistic,
  Grid,
  Icon,
  Form,
  ButtonGroup,
  Button,
  ButtonOr,
} from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your balance:</Statistic.Label>
        <Statistic.Value>36,500.00</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Column>
            <Statistic size="tiny" color="green">
              <Statistic.Label>Income:</Statistic.Label>
              <Statistic.Value>25,432.00</Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic size="tiny" color="red">
              <Statistic.Label>Expenses:</Statistic.Label>
              <Statistic.Value>5,432.00</Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid>
      </Segment>
      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>Grocery</Grid.Column>
            <Grid.Column width={3}>5,250.00</Grid.Column>
            <Grid.Column width={3} textAlign="center">
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>Shoes</Grid.Column>
            <Grid.Column width={3}>1,250.00</Grid.Column>
            <Grid.Column width={3} textAlign="center">
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>Bills</Grid.Column>
            <Grid.Column width={3}>2,500.00</Grid.Column>
            <Grid.Column width={3} textAlign="center">
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">Add new expense</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            placeholder="new thing"
            icon="tags"
            width={12}
            label="Description"
          />
          <Form.Input
            placeholder="Amount"
            icon="rupee"
            iconPosition="left"
            width={4}
            label="Amount"
          />
        </Form.Group>
        <Button.Group style={{ margin: "20px 0" }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Save</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
