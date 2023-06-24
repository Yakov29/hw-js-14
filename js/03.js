// 1)
const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"]
  };
  
  // 2)
  apartment.owner = {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com"
  };
  
  // 3)
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  
  // 4)
  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[apartment.tags.length - 1];
  
  // 5)
  const aptRating2 = apartment["rating"];
  const aptDescr2 = apartment["descr"];
  const aptPrice2 = apartment["price"];
  const aptTags2 = apartment["tags"];
  
  // 6)
  apartment.price = 5000;
  apartment.rating = 4.7;
  apartment.owner.name = "Henry Sibola";
  apartment.tags.push("trusted");
  
  // 7)
  apartment.area = 60;
  apartment.rooms = 3;
  apartment.location = {
    country: "Jamaica",
    city: "Kingston"
  };
  
  console.log(apartment);
  