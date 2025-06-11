import PhotoForm from "./PhotoForm";

const PhotoAdmin = () => {
  return (
    <PhotoForm
      url="photos"
      categoryUrl="photoCategories"
      albumUrl="photoAlbum"
      title="photo"
    />
  );
};

export default PhotoAdmin;
