const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (
    <div>
      <Part name={part1} exercises={exercises1} />
      <Part name={part2} exercises={exercises2} />
      <Part name={part3} exercises={exercises3} />
    </div>
  );
};

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [

  {
    name: 'Fundamentals of React',
    exercises: 10
  },

  {
    name: 'Using props to pass data',
    exercises: 7
  },

  {
    name: 'State of a component',
    exercises: 14
  }

  ]
}

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  );
};

export default App;