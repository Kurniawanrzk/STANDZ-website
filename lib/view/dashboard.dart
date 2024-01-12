import 'dart:async';
import 'dart:html';
import 'package:flutter/material.dart';
import 'package:geocoding/geocoding.dart';
import 'package:geolocator/geolocator.dart';
import 'package:geolocator_web/geolocator_web.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:standzclient/components/field_input/input.dart';
import 'package:standzclient/components/navigation_bar.dart';
import 'package:standzclient/model/land.dart';
import 'package:standzclient/service/auth.dart';
import 'package:dio/dio.dart' as d;
import 'package:standzclient/service/dio.dart';

class DashboardPage extends StatefulWidget {
  final String title;
  const DashboardPage({Key? key, required this.title}) : super(key: key);

  @override
  _DashboardPageState createState() => _DashboardPageState();
}

class _DashboardPageState extends State<DashboardPage> {
  List<Land> landList = [];
  String address = '';
  TextEditingController _searchController = TextEditingController();

  @override
  void initState() {
    readToken();
    getAllLand();
    super.initState();
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  _showSearchModal(BuildContext context) {
    return showModalBottomSheet(
      isScrollControlled: true,      
      context: context,
      
      builder:  (BuildContext context) {
      Auth auth = Provider.of<Auth>(context, listen: false);
        return Container(
          width: 1000,
          padding: EdgeInsets.all(16.0),
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  
                  SearchBarOnModal(searchController: _searchController),
        
                ],
              ),
            ],
          ),
        );
      },
    );
  }

  getAddress(String lat, String lon)async {
     try {
      d.Response response = await dio().get('https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=5d906f8f4a4448d6a95ad0913d369b51');


      setState(() {
        address = "${response.data['features'][0]['properties']['city']}";
      });
    } catch (e) {
      print(e);
    }
  }
  getAllLand() async {
    try {
      d.Response response = await dio().get('/land/get?search=');
      List<dynamic> data = response.data;

      setState(() {
        landList = data.map((land) => Land.fromJson(land)).toList();
      });
    } catch (e) {
      print(e);
    }
  }

    Position? _currentLocation;
    late bool servicePermission = false;
    String _currentAddress = '';
    late LocationPermission permission;
    final GeolocatorPlatform _geolocatorPlatform = GeolocatorPlatform.instance;
    
    Future<Position> _getCurrentPosisiton() async {
      servicePermission = await _geolocatorPlatform.isLocationServiceEnabled();
      if(!servicePermission) {
          print("service disable");
      }
          permission = await Geolocator.checkPermission();
       if(permission == LocationPermission.denied) {
            permission = await Geolocator.requestPermission();
          }
      return await Geolocator.getCurrentPosition();
    }
     _getAddressFromCoordinates() async {
        try {
          List<Placemark> placemark = await   placemarkFromCoordinates(_currentLocation!.latitude, _currentLocation!.longitude);
          Placemark place =  placemark[0];

          setState(() {
            _currentAddress = "${place.locality}, ${place.country}";
          });

        } catch (e) {
          
        }
    }


  void readToken() async {
    Auth auth = Provider.of<Auth>(context, listen: false);
    String token = window.localStorage['token'].toString();
    auth.tryToken(token);
  }

  @override
  Widget build(BuildContext context) {

      int crossAxisCount = MediaQuery.of(context).size.width > 600 ? 4 : 1;
    return MaterialApp( 
      title: "DashboardPage",
      theme: ThemeData(
        primarySwatch: Colors.teal,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: Scaffold(
        body: SingleChildScrollView(
          child: Column(
            children: [
              NavigationBars(),
              InputField(widthSizedBox: 450, labelText: "Search", hintText: "Search", icon: Icon(Icons.search), 
              onTap: () async{
                _currentLocation =  await _getCurrentPosisiton();
                getAddress(_currentLocation!.latitude.toString(), _currentLocation!.longitude.toString());
                _showSearchModal(context);
              },obscureText: false),
              CardContentLand(crossAxisCount: crossAxisCount, landList: landList),
            ],
          ),
        ),
      ),
    );

  }
}

class SearchBarOnModal extends StatelessWidget {
  const SearchBarOnModal({
    super.key,
    required TextEditingController searchController,
  }) : _searchController = searchController;

  final TextEditingController _searchController;

  @override
  Widget build(BuildContext context) {
   
    
    return SizedBox(
      child: Row(
        children: [
          InputField(
            controller: _searchController
            ,widthSizedBox: 400, labelText: "", hintText: "Search",obscureText: false),
                SizedBox(width: 10),
                ElevatedButton(
                      onPressed: () {
                          Navigator.of(context).pop();
                        context.go("/search/${_searchController.text}");
                      },
                      child: Text("Search", style: TextStyle(color: Colors.white)),
                      style: ElevatedButton.styleFrom(
                        padding: EdgeInsets.all(24),
                        backgroundColor: Color.fromRGBO(90, 193, 187, 100),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(2.0),
                        ),
                      ),
                    ),
        ],
      ),
    );
  }
}

class CardContentLand extends StatelessWidget {
  const CardContentLand({
    super.key,
    required this.crossAxisCount,
    required this.landList,
  });

  final int crossAxisCount;
  final List<Land> landList;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(height: 50),
        Text("Tanah Rekomendasi", style: TextStyle(fontSize: 20),),
        Builder(
          builder: (context) {
            return GridView.builder(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: crossAxisCount,
                crossAxisSpacing: 1.0,
                mainAxisSpacing: 8.0,
                childAspectRatio: 1.0, 
              ),
              itemCount: landList.length,
              itemBuilder: (context, index) {
                Land land = landList[index];
                return Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Image.network(
                        land.landPhotos[0],
                        fit: BoxFit.cover,
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                Icon(Icons.star_border_purple500_outlined),
                                Text("${land.rating}", style: TextStyle(fontWeight: FontWeight.bold),),
                              ],
                            ),
                            Text(land.landName),
                            Text("${land.kota}"),
                            Text("${land.rentalPrice}", 
                              style: TextStyle(fontWeight: FontWeight.bold),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                );
              },
            );
          },
        ),
      ],
    );
  }
}
