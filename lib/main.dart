
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:standzclient/service/auth.dart';
import 'package:standzclient/service/land.dart';
import 'package:standzclient/view/dashboard.dart';
import 'package:standzclient/view/login.dart';
import 'package:go_router/go_router.dart';
import 'package:standzclient/view/search.dart';
import 'package:url_strategy/url_strategy.dart';

void main() {
  
  setPathUrlStrategy();
  runApp( 
    
    MultiProvider(
    providers:[
      ChangeNotifierProvider(create: (context) => Auth()),
    ],
    child: const MainApp(),
  
  )
);
}



class MainApp extends StatelessWidget {
  final String title = '';
  const MainApp({Key? key}):super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: _router,
    );
  }
}
final GoRouter _router = GoRouter(
  routes: <RouteBase>[
    GoRoute(
      path: '/',
      builder: (BuildContext context, GoRouterState state) {
        return const DashboardPage(title: "Dashboard Page",);
      },
      routes: <RouteBase>[
        GoRoute(
          path: 'login',
          builder: (BuildContext context, GoRouterState state) {
            return const LoginPage(title: "Login Page",);
          },
        ),
        GoRoute(
          path: 'search/:query',
          builder: (BuildContext context, GoRouterState state) {
            String q = state.pathParameters['query'].toString();
            return SearchPage(query: q );
          },
        ),
        
      ],
      
    ),
  ],
);