import UseEffectWithDependencyArray from "./practice/UseEffectWithDependencyArray";
import UseEffectWithEmptyDependencyArray from "./practice/UseEffectWithEmptyDependencyArray";
import UseEffectWithNoDependencyArray from "./practice/UseEffectWithNoDependencyArray";

const App = () => {
  return (
    <>
      <UseEffectWithNoDependencyArray />
      <UseEffectWithEmptyDependencyArray />
      <UseEffectWithDependencyArray />
    </>
  );
};

export default App;
