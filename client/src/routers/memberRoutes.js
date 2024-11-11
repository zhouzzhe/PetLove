import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MemberMain from "../page/member/membership.jsx";
import AddCard from "../page/member/addcard.jsx";
import Adoption from "../page/member/member-adoption.jsx";
import ContactGuest from "../page/member/member-contactGuest.jsx";
import ContactNanny from "../page/member/member-contactNanny.jsx";
import History from "../page/member/member-history.jsx";
import JoinUs from "../page/member/member-joinus.jsx";
import Logistic from "../page/member/member-logistic.jsx";
import Mission from "../page/member/member-mission.jsx";
import Score from "../page/member/member-orderScore.jsx";
import PassWord from "../page/member/member-password.jsx";
import PayCard from "../page/member/member-paycard.jsx";
import BecomeNanny from "../page/member/member-becomeNanny.jsx";
import BecomeWalker from "../page/member/member-becomewalker.jsx";
import Payment from "../page/member/member-payment.jsx";
import MyRequest from "../page/member/member-request.jsx";
import UserPage from "../page/member/member-userpage.jsx";
import UserInfo from "../page/member/member-userinfo.jsx";
import Jobsetting from "../page/member/member-jobsetting.jsx";
import Address from "../page/member/member-address.jsx";
import Login from "../page/member/member-login.jsx";
import Register from "../page/member/member-login-register.jsx";
import loginSuccess from "../page/member/member-loginSuccess.jsx";

class MemberRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/member" component={MemberMain} exact />
        <Route path="/member/card-add" component={AddCard} />
        <Route path="/member/adoption" component={Adoption} />
        <Route path="/member/contact-guest" component={ContactGuest} />
        <Route path="/member/contact-nanny" component={ContactNanny} />
        <Route path="/member/history" component={History} />
        <Route path="/member/join-us" component={JoinUs} />
        <Route path="/member/logistic" component={Logistic} />
        <Route path="/member/mission" component={Mission} />
        <Route path="/member/score" component={Score} />
        <Route path="/member/password" component={PassWord} />
        <Route path="/member/paycard" component={PayCard} />
        <Route path="/member/become-nanny" component={BecomeNanny} />
        <Route path="/member/become-walker" component={BecomeWalker} />
        <Route path="/member/payment" component={Payment} />
        <Route path="/member/request" component={MyRequest} />
        <Route path="/member/userpage" component={UserPage} />
        <Route path="/member/userinfo" component={UserInfo} />
        <Route path="/member/jobsetting" component={Jobsetting} />
        <Route path="/member/address" component={Address} />
        <Route path="/Login" component={Login} exact />
        <Route path="/member/Register" component={Register} exact />
        <Route path="/member/loginSuccess" component={loginSuccess} exact />
      </Switch>
    );
  }
}

export default MemberRoutes;
