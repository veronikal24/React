import { useLocation } from 'react-router-dom';

function About() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const name = params.get('name');

  // Use the `id` to fetch data about the Pokemon from an API or elsewhere

  return (
    <div>
      <h2>About Pokemon {name}</h2>
      {/* Display data about the Pokemon */}
    </div>
  );
}

export default About;