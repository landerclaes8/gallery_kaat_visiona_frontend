import Form from "./Form";

const PhotoAdmin = () => {
  return (
    <>
      <Form
        url="photos"
        categoryUrl="/photoCategories"
        title="photo"
        photoTrue={true}
      />
    </>
  );
};

export default PhotoAdmin;
