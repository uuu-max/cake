import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Icon } from 'vant';
import { Card ,Checkbox, CheckboxGroup,SubmitBar } from 'vant';
import { Toast } from 'vant';
import { AddressEdit,Area  } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Sku } from 'vant';
import { ContactCard, ContactList, ContactEdit } from 'vant';

Vue.use(ContactCard);
Vue.use(ContactList);
Vue.use(ContactEdit);

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sku);
Vue.use(Toast);
Vue.use(AddressEdit).use(Area);
Vue.use(Icon).use(SwipeItem).use(Swipe);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Card).use(Checkbox).use(CheckboxGroup).use(SubmitBar);