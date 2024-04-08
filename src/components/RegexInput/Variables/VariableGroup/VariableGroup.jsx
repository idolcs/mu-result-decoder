import VariableItem from "./VariableItem/VariableItem";

const VariableGroup = (props) => {
  const group = props.data;

  const getItems = () => {
    if (group != null) {
      const items = group.map((item) => <VariableItem data={item} />);
      // console.log(items);
      return items;
    } else {
      return (
        <>
          <p>No variables in group found</p>
        </>
      );
    }
  };

  return (
    <>
      <div className="p-4 border-2 border-black rounded-md mb-4">
        <p className="mb-2">Select Variables</p>
        {getItems()}
        </div>
    </>
  );
};

export default VariableGroup;
