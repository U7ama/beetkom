import React,{useState} from 'react'
import InputDesign from '../InputDesign'
import SelectInputDesign from '../MultiInputSelect'
import Checkbox from '../Checkbox'
import Upload from '../Upload'
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { arLabels } from './arLabels'
import { useForm } from "react-hook-form";
import axios from "axios"
import Header from "../../components/Header"
const ArabicForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [uploadedImages, setUploadedImages] = useState({
      main_image: "",
      first_floor_map_image: "",
      second_floor_map_image: "",
      sub_image_1: "",
      sub_image_2: "",
    });
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm();
  
    const onSubmit = async (data) => {
      console.log("formData", data);
  
      data.main_image = uploadedImages.main_image;
      data.first_floor_map_image = uploadedImages.first_floor_map_image;
      data.second_floor_map_image = uploadedImages.second_floor_map_image;
      data.sub_image_1 = uploadedImages.sub_image_1;
      data.sub_image_2 = uploadedImages.sub_image_2;
      data.second_floor_map_image = uploadedImages.second_floor_map_image;
      const url = "https://api.beetkom.org/api/write/Properties";
  
      setLoading(true);
  
      try {
        const response = await axios.post(url, data);
  
        console.log("Success:", response.data);
        navigate("/properties");
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
  
    const listing = [
      { value: "يشتري", label: "يشتري" },
      { value: "إيجار", label: "إيجار" },
      { value: "أُوكَازيُون", label: "أُوكَازيُون" },
    ];
    const catogery = [
      { value: "منازل", label: "منازل" },
      { value: "مشاعل", label: "مشاعل" },
    ];
    const Location = [
      { value: "سلفيت", label: "سلفيت" },
      { value: "نابلس", label: "نابلس" },
      { value: "رام الله", label: "رام الله" },
      { value: "تالكورم", label: "تالكورم" },
      { value: "الخليل", label: "الخليل" },
      { value: "بيت لحم", label: "بيت لحم" },
    ];
  
    const handleFileUpload = (base64String, fieldName) => {
      console.log("Image base64 string:", base64String);
  
      // Update the state with the base64 string for the corresponding image field
      setUploadedImages((prevImages) => ({
        ...prevImages,
        [fieldName]: `data:image/jpeg;base64,${base64String}`,
      }));
    };
        return (
          <>
        
            <div className='p-20'>
             <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 flex flex-col w-full"
        >
          <h1>Add New Property</h1>
          <div className="grid grid-cols-3 gap-4 p-10 text-xl">
            <InputDesign
              register={register}
              fieldName={"title"}
              required={true}
              title={arLabels.title}
              value="email"
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"sub_title"}
              required={true}
              title={arLabels.sub_title}
              type="text"
            />
            <SelectInputDesign
              register={register}
              fieldName={"listing_type"}
              required={true}
              options={listing}
            />
            <SelectInputDesign
              register={register}
              fieldName={"location_area"}
              required={true}
              options={Location}
            />
            <SelectInputDesign
              register={register}
              fieldName={"category_type"}
              required={true}
              options={catogery}
            />
            <InputDesign
              register={register}
              fieldName={"description"}
              required={true}
              title={arLabels.description}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"contact_no"}
              required={true}
              title={arLabels.contact_no}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"size"}
              required={true}
              title={arLabels.size}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"bed_room_count"}
              required={true}
              title={arLabels.bed_room_count}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"bath_count"}
              required={true}
              title={arLabels.bath_count}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"security_camaras_count"}
              required={true}
              title={arLabels.security_camaras_count}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"disabled_access_type"}
              required={true}
              title={arLabels.disabled_access_type}
            />
            <InputDesign
              register={register}
              fieldName={"fence_type"}
              required={true}
              title={arLabels.fence_type}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"floor_type"}
              required={true}
              title={arLabels.floor_type}
              type="text"
            />
            <Checkbox
              register={register}
              fieldName={"is_floor_available"}
              required={true}
              label={arLabels.is_floor_available}
            />
            <InputDesign
              register={register}
              fieldName={"additional_space_type"}
              required={true}
              title={arLabels.additional_space_type}
              type="text"
            />
            <Checkbox
              register={register}
              fieldName={"is_additional_space"}
              required={true}
              label={arLabels.is_additional_space}
            />
            <InputDesign
              register={register}
              fieldName={"furnished_type"}
              required={true}
              title={arLabels.furnished_type}
              type="text"
            />
            <Checkbox
              register={register}
              fieldName={"is_furnished"}
              required={true}
              label={arLabels.is_furnished}
            />
            <InputDesign
              register={register}
              fieldName={"revolution_date"}
              required={true}
              title={arLabels.revolution_date}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"ceiling_height"}
              required={true}
              title={arLabels.ceiling_height}
              type="text"
            />
            <Checkbox
              register={register}
              fieldName={"is_ceiling"}
              required={true}
              label={arLabels.is_ceiling}
            />
            <InputDesign
              register={register}
              fieldName={"construction_year"}
              required={true}
              title={arLabels.construction_year}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"address"}
              required={true}
              title={arLabels.address}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"rating_count"}
              required={true}
              title={arLabels.rating_count}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"currency"}
              required={true}
              title={arLabels.currency}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"price"}
              required={true}
              title={arLabels.price}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"_360_url"}
              required={true}
              title={arLabels._360_url}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"map_url"}
              required={true}
              title={arLabels.map_url}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"video_image_address"}
              required={true}
              title={arLabels.video_url}
              type="text"
            />
            <div className="flex flex-col space-y-4">
              <Upload
                title={arLabels.main_image}
                onFileUpload={(base64String) =>
                  handleFileUpload(base64String, "main_image")
                }
                register={register}
                fieldName="main_image"
              />
              {uploadedImages.main_image && (
                <img
                  src={`${uploadedImages.main_image}`}
                  alt="uploadedImage"
                  width={140}
                  className="mb-6"
                />
              )}
            </div>

            <div className="flex flex-col space-y-4">
              <Upload
                title={arLabels.first_floor_map_image}
                onFileUpload={(base64String) =>
                  handleFileUpload(base64String, "first_floor_map_image")
                }
                register={register}
                fieldName="first_floor_map_image"
              />
              {uploadedImages.first_floor_map_image && (
                <img
                  src={`${uploadedImages.first_floor_map_image}`}
                  alt="uploadedImage"
                  width={140}
                  className="mb-6"
                />
              )}
            </div>
            <div className="flex flex-col space-y-4">
              <Upload
                title={arLabels.second_floor_map_image}
                onFileUpload={(base64String) =>
                  handleFileUpload(base64String, "second_floor_map_image")
                }
                register={register}
                fieldName="second_floor_map_image"
              />
              {uploadedImages.second_floor_map_image && (
                <img
                  src={`${uploadedImages.second_floor_map_image}`}
                  alt="uploadedImage"
                  width={140}
                  className="mb-6"
                />
              )}
            </div>

            <div className="flex flex-col space-y-4">
              <Upload
                title={arLabels.sub_image_1}
                onFileUpload={(base64String) =>
                  handleFileUpload(base64String, "sub_image_1")
                }
                register={register}
                fieldName="sub_image_1"
              />
              {uploadedImages.sub_image_1 && (
                <img
                  src={`${uploadedImages.sub_image_1}`}
                  alt="uploadedImage"
                  width={140}
                  className="mb-6"
                />
              )}
            </div>
            <div className="flex flex-col space-y-4">
              <Upload
                title={arLabels.sub_image_2}
                onFileUpload={(base64String) =>
                  handleFileUpload(base64String, "sub_image_2")
                }
                register={register}
                fieldName="sub_image_2"
              />
              {uploadedImages.sub_image_2 && (
                <img
                  src={`${uploadedImages.sub_image_2}`}
                  alt="uploadedImage"
                  width={140}
                  className="mb-6"
                />
              )}
            </div>
          </div>
          <h1>Property Good Details</h1>
          <div className="grid grid-cols-3 gap-4 p-10">
            <InputDesign
              register={register}
              fieldName={"heating_type"}
              required={true}
              title={arLabels.heating_type}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"window_type"}
              required={true}
              title={arLabels.window_type}
              type="text"
            />
            <Checkbox
              register={register}
              fieldName={"is_pet_friendly"}
              required={true}
              label={arLabels.is_pet_friendly}
            />
            <Checkbox
              register={register}
              fieldName={"has_heating"}
              required={true}
              label={arLabels.has_heating}
            />
            <Checkbox
              register={register}
              fieldName={"has_window"}
              required={true}
              label={arLabels.has_window}
            />
            <Checkbox
              register={register}
              fieldName={"has_air_conditioners"}
              required={true}
              label={arLabels.has_air_conditioners}
            />
            <Checkbox
              register={register}
              fieldName={"has_cable_tv"}
              required={true}
              label={arLabels.has_cable_tv}
            />
            <Checkbox
              register={register}
              fieldName={"has_fire_place"}
              required={true}
              label={arLabels.has_fire_place}
            />
            <Checkbox
              register={register}
              fieldName={"has_intercorm"}
              required={true}
              label={arLabels.has_intercorm}
            />
            <Checkbox
              register={register}
              fieldName={"has_wifi"}
              required={true}
              label={arLabels.has_wifi}
            />
            <Checkbox
              register={register}
              fieldName={"has_ventillation"}
              required={true}
              label={arLabels.has_ventillation}
            />
            <Checkbox
              register={register}
              fieldName={"has_garage"}
              required={true}
              label={arLabels.has_garage}
            />
            <Checkbox
              register={register}
              fieldName={"has_swimming_pool"}
              required={true}
              label={arLabels.has_swimming_pool}
            />
            <Checkbox
              register={register}
              fieldName={"has_parking"}
              required={true}
              label={arLabels.has_parking}
            />
            <Checkbox
              register={register}
              fieldName={"has_garden"}
              required={true}
              label={arLabels.has_garden}
            />
          </div>
          <h1>proeprty Nearby Details</h1>
          <div className="grid grid-cols-3 gap-4 p-10">
            <InputDesign
              register={register}
              fieldName={"school_distance"}
              required={true}
              title={arLabels.school_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"university_distance"}
              required={true}
              title={arLabels.university_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"hospital_distance"}
              required={true}
              title={arLabels.hospital_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"metro_station_distance"}
              required={true}
              title={arLabels.metro_station_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"grocery_center_distance"}
              required={true}
              title={arLabels.grocery_center_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"market_distance"}
              required={true}
              title={arLabels.market_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"gym_distance"}
              required={true}
              title={arLabels.gym_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"river_distance"}
              required={true}
              title={arLabels.river_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"wellness_distance"}
              required={true}
              title={arLabels.wellness_distance}
              type="text"
            />
          </div>
          <div className="flex items-center w-full justify-center">
            <button
              type="submit"
              // onClick={() => handleSubmit(handleFormSubmit)()}
              className="bg-[#1ebbd7] py-2 px-44 rounded-lg text-white"
            >
              {loading ? "Submitting..." : " Submit"}
            </button>
          </div>
          
          {errors && Object.keys(errors).length > 0 && (
            <div className="text-red-500">
              <p>Fill Complete Form</p>
            </div>
          )}
        </form>
         
            </div>
            </>
        )
}


export default ArabicForm