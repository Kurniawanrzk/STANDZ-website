import 'package:flutter/material.dart';
import 'package:getwidget/getwidget.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:standzclient/service/auth.dart';

class NavigationBars extends StatefulWidget {
  const NavigationBars({
    Key? key,
  }) : super(key: key);

  @override
  _NavigationBarsState createState() => _NavigationBarsState();
}

class _NavigationBarsState extends State<NavigationBars> {
  
  _showUserModal(BuildContext context) {
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
              // Your modal content here
              Text("Name : ${auth.user!.name}"),
              Text("Email : ${auth.user!.email}"),
              ElevatedButton(onPressed: (){
                auth.logout(context);
                Navigator.of(context).pop();
              }, child: Text("Logout")),
              // Close button
              IconButton(
                icon: Icon(Icons.close),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
            ],
          ),
        );
      },
    );
  }
  @override
  Widget build(BuildContext context) {
    bool isMobile = MediaQuery.of(context).size.width <= 600;

    return Column(
      children: [
        Padding(
          padding: EdgeInsets.fromLTRB(40, 10, 40, 0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Visibility(
                visible: !isMobile,
                child: TextButton(
                  onPressed: () {
                    context.go("/");
                  },
                  child: Image.asset("images/logo.png", width: 60),
                ),
              ),
              Padding(
                padding: EdgeInsets.all(8.0),
                child: Row(
                  children: [
                    SizedBox(width: 10),
                    TextButton(
                      onPressed: () {
                        context.go("/home");

                      },
                      child: Text("Home", style: TextStyle(color: Colors.black)),
                      style: ElevatedButton.styleFrom(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(5.0),
                        ),
                      ),
                    ),
                    SizedBox(width: 10),
                    TextButton(
                      onPressed: () {
                        context.go("/home");
                      },
                      child: Text("Recomend", style: TextStyle(color: Colors.black)),
                      style: ElevatedButton.styleFrom(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(5.0),
                        ),
                      ),
                    ),
                    SizedBox(width: 10),
                    TextButton(
                      onPressed: () {
                        context.go("/home");
                      },
                      child: Text("Other", style: TextStyle(color: Colors.black)),
                      style: ElevatedButton.styleFrom(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(5.0),
                        ),
                      ),
                    ),
                    SizedBox(width: 10),
                    SizedBox(width: 10),
                    SizedBox(width: 10),

                     Consumer<Auth>(builder: (context, auth, child) {
                        if(auth.authenticated == false) {
                            return ElevatedButton(
                              onPressed: () {
                                context.go('/login');
                              },
                              child: Text("Login", style: TextStyle(color: Colors.white)),
                              style: ElevatedButton.styleFrom(
                                backgroundColor: Color.fromRGBO(90, 193, 187, 100),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(5.0),
                                ),
                              ),
                            );
                        } else {
                            return Column(children: [
                               TextButton(onPressed: (){
                                _showUserModal(context);
                               }, child: GFAvatar(
                                backgroundImage: AssetImage('images/user.png'),
                            )),
                              Text(auth.user!.username)
                            ],);
                        }
                      }),
                    
                  ],
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
