import 'package:dio/dio.dart' as d;
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:standzclient/components/field_input/input.dart';
import 'package:standzclient/components/navigation_bar.dart';
import 'package:standzclient/model/land.dart';
import 'package:standzclient/service/dio.dart';
import 'package:standzclient/view/dashboard.dart';

class SearchPage extends StatefulWidget {
  final String query;
  const SearchPage({Key? key, required this.query}) :super(key:key);
  @override
 _SearchPageState createState() => _SearchPageState();

}

class _SearchPageState extends State<SearchPage> {
    List<Land> landList = [];
    getAllLand() async {
    try {
      String q = widget.query;
      d.Response response = await dio().get('/land/get?search=$q');
      List<dynamic> data = response.data;
      setState(() {
        landList = data.map((land) => Land.fromJson(land)).toList();
      });
    } catch (e) {
      print(e);
    }
  }
  @override
  void initState() {
    getAllLand();
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
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
              InputField(widthSizedBox: 450, labelText: "Search", hintText: "Search", icon: Icon(Icons.search), onTap: () {
              },obscureText: false),
              Column(
      children: [
        SizedBox(height: 50),
        Text("Hasil dari : ${widget.query}", style: TextStyle(fontSize: 20),),
        Builder(
          builder: (context) {
            if(widget.query == null) {
                return Text("No data");
            } else {
                return GridView.builder(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 4 ,
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
            }
          },
        ),
      ],
    ),
            ],
          ),
        ),
      ),
    );
  }
}