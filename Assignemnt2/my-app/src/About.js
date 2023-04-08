

import { useLocation } from 'react-router-dom';

function About() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const id = params.get('id');

  // Use the `id` to fetch data about the Pokemon from an API or elsewhere

  return (
    <div>
      <h2>About Pokemon {id}</h2>
      {/* Display data about the Pokemon */}
    </div>
  );
}

export default About;

