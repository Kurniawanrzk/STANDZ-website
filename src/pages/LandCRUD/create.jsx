import React, { useState, useEffect } from "react";
import { Button, Img, Input, Text } from "components";
import Header from "components/Header";
import { useParams, useNavigate } from 'react-router-dom'
import LandService from "service/land";


const CreateLand = () => {
    const navigate = useNavigate()
    const [landName, setLandName] = useState('');
    const [location, setLocation] = useState('');
    const [surfaceArea, setSurfaceArea] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [rentalPrice, setRentalPrice] = useState('');
    const [provinsi, setProvinsi] = useState('');
    const [kota, setKota] = useState('');
    const [kecamatan, setKecamatan] = useState('');
    const [kelurahan, setKelurahan] = useState('');
    const [batasTagihan, setBatasTagihan] = useState('');


const createLand = (e) => {
    e.preventDefault();
    LandService.CreateNewLand({
        land_name:landName, 
        location:location, 
        surface_area:surfaceArea,
        deskripsi:deskripsi,
        rental_price:rentalPrice,
        provinsi:provinsi,
        kota:kota,
        kecamatan:kecamatan,
        kelurahan:kelurahan,
        batas_tagihan:batasTagihan,
        token:localStorage.getItem("token")
    })
    .then((data) => {
        console.log(data)
        navigate("/")
    })
}

console.log(batasTagihan)

  return (
    <>
      <div className="bg-lime-600 flex flex-col font-inriasans items-center justify-start mx-auto p-[53px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[51px] justify-start max-w-[1325px] mb-[409px] mx-auto w-full">
          <Header />
          <div className="grid justify-content">
                <form >
                <div className="mt-2 w-[600px] sm:w-full">
                        <Text>Land name</Text>
                        <Input 
                        onChange={(val) => setLandName(val)}
                        />
                      </div>
                      <div className="mt-2 w-[600px] sm:w-[300px]">
                      <Text>Location Coordinate</Text>
                      <Input  
                        onChange={(val) => setLocation(val)}
                        />
                      </div>
                      <div className="mt-2 w-[600px] sm:w-full">
                      <Text>Surface Area</Text>
                      <Input  
                        onChange={(val) => setSurfaceArea(val)}
                        />                      </div>
                      <div className="mt-2 w-[600px] sm:w-full">
                      <Text>Deskripsi</Text>
                      <Input  
                        onChange={(val) => setDeskripsi(val)}
                        />                      </div>
                      <div className="mt-2 w-[600px] sm:w-full">
                      <Text>Rental Price</Text>
                      <Input  
                        onChange={(val) => setRentalPrice(val)}
                        />                      </div>
                      <div className="mt-2 w-[600px] sm:w-full">
                      <Text>Provinsi</Text>
                      <Input  
                        onChange={(val) => setProvinsi(val)}
                        />                      </div>
                      <div className="mt-2 w-[600px] sm:w-full">
                      <Text>Kota</Text>
                      <Input  
                        onChange={(val) => setKota(val)}
                        />                      </div>
                      <div className="mt-2 w-[600px] sm:w-full">
                      <Text>Kecamatan</Text>
                      <Input  
                        onChange={(val) => setKecamatan(val)}
                        />                      </div>
                      <div className="mt-2 w-[600px] sm:w-full">
                      <Text>Kelurahan</Text>
                      <Input  
                        onChange={(val) => setKelurahan(val)}
                        />                      </div>
                      <div className="mt-2 w-[600px] sm:w-full">
                      <Text>Batas Tagihan</Text>
                      <select
                        onChange={(val) => setBatasTagihan(val.target.value)}
                      >
                        <option>Month</option>
                        <option>Week</option>
                      </select>
                      </div>
                      <Button onClick={createLand} className="text-lg mt-2 border">Submit</Button>
                </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateLand;
