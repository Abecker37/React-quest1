import PropTypes from "prop-types";
function NavBar({ count, setCount, length }) {
  
  const beforeButton = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const afterButton = () => {
    if (count < length - 1) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      {count > 0 ? <button onClick={beforeButton}>before</button> : ""}
      {count < length - 1 ? <button onClick={afterButton}>After</button> : ""}
    </div>
  );
}

NavBar.propTypes = {
  count: PropTypes.number.isRequired, // Ajoutez cette validation pour count
  setCount: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};


export default NavBar;