import Houses from './UI/HouseCards';
import data from './DATA/data.json'

const Home: React.FC = () => {
  return (
    <>
    <Houses houses={data}  />
    </>
  )
}

export default Home;