

const withPromoptedLabel = (WrappedComponent: any) => {
  return (props: any) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withPromoptedLabel;
