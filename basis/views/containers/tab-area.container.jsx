// deps
import React, { Component } from 'react';

// components
import { TabArea, Tab, TabContent, TabListAside } from 'views/components/tab-area';
import {Button} from 'views/components/buttons';

class TabAreaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
    };
  }

  onTabChange(tabIndex) {
    console.log('go to tab @ ', tabIndex);

    this.setState({
      currentTab: tabIndex,
    });
  }

  render() {
    const { currentTab } = this.state;

    return (
      <div>
        current tab: {currentTab}

        <TabArea
          currentTab={currentTab}
          onTabChange={this.onTabChange.bind(this)}>
            <Tab>tab #01</Tab>
            <Tab>tab #02</Tab>
            <Tab>tab #03</Tab>

            <TabContent style={{height: '200px', overflow: 'auto'}}>
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
              Minions ipsum la bodaaa bee do bee do bee do hana dul sae belloo! Po kass hahaha. Ti aamoo! bananaaaa me want bananaaa! Hana dul sae gelatooo me want bananaaa! Daa hana dul sae tulaliloo jiji potatoooo. Hahaha pepete hahaha aaaaaah butt poopayee. Hana dul sae tatata bala tu hahaha tank yuuu! Wiiiii tank yuuu! Hahaha tatata bala tu bee do bee do bee do po kass. Gelatooo belloo! Tank yuuu! Bee do bee do bee do bappleees gelatooo. Wiiiii tank yuuu! Po kass tatata bala tu aaaaaah pepete. Tatata bala tu po kass poopayee bananaaaa baboiii.
            </TabContent>

            <TabContent>
              Bacon ipsum dolor amet chuck turkey picanha, pig andouille fatback short loin ground round leberkas chicken drumstick pork chop corned beef. Turducken ham hock rump ham strip steak, capicola spare ribs hamburger. Frankfurter biltong t-bone kielbasa ham. Jowl ground round fatback swine bacon. Ground round beef t-bone cupim short loin tail capicola pork landjaeger spare ribs.
            </TabContent>

            <TabContent>
              Lorem ipsum dolor sit amet um num ist gul vex ber.
            </TabContent>

            <TabListAside>
              <Button size="medium" type="main">create do something</Button>
            </TabListAside>
        </TabArea>
      </div>
    );
  }
}

export default TabAreaContainer;