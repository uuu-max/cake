import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Icon } from 'vant';
import { Card ,Checkbox, CheckboxGroup,SubmitBar } from 'vant';
Vue.use(Icon).use(SwipeItem).use(Swipe);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Card).use(Checkbox).use(CheckboxGroup).use(SubmitBar);