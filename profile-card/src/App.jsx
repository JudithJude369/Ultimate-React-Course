import SkillList from './SkillList';
import Avatar from './Avatar';
import Intro from './Intro';

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
};

export default App;
