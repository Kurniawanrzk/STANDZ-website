import 'dart:html';

import 'package:flutter/material.dart';
import 'package:dio/dio.dart' as d;
import 'package:standzclient/model/land.dart';
import 'package:standzclient/service/dio.dart';


class LandService extends ChangeNotifier {
    Land? _land;
    Land? get land => _land;
    getAllLand() async {
    try {
      d.Response response = await dio().get('/land/get');
      _land = Land.fromJson(response.data);
    } catch (e) {
      print(e);
    }
  }
}