class Land {
  String landName;
  String location;
  String provinsi;
  String kota;
  String kecamatan;
  String kelurahan;
  String surfaceArea;
  String deskripsi;
  String rentalPrice;
  double rating;
  List<String> landPhotos;
  LandOwner landOwner;

  Land({
    required this.landName,
    required this.location,
    required this.provinsi,
    required this.kota,
    required this.kecamatan,
    required this.kelurahan,
    required this.surfaceArea,
    required this.deskripsi,
    required this.rentalPrice,
    required this.rating,
    required this.landPhotos,
    required this.landOwner,
  });

  factory Land.fromJson(Map<String, dynamic> json) {
    return Land(
      landName: json['land_name'],
      location: json['location'],
      provinsi: json['provinsi'],
      kota: json['kota'],
      kecamatan: json['kecamatan'],
      kelurahan: json['kelurahan'],
      surfaceArea: json['surface_area'],
      deskripsi: json['deskripsi'],
      rentalPrice: json['rental_price'],
      rating: json['rating'],
      landPhotos: List<String>.from(json['land_photos']),
      landOwner: LandOwner.fromJson(json['land_owner']),
    );
  }
}

class LandOwner {
  String name;
  String username;
  String email;
  String phoneNumber;

  LandOwner({
    required this.name,
    required this.username,
    required this.email,
    required this.phoneNumber,
  });

  factory LandOwner.fromJson(Map<String, dynamic> json) {
    return LandOwner(
      name: json['name'],
      username: json['username'],
      email: json['email'],
      phoneNumber: json['phone_number'],
    );
  }
}
