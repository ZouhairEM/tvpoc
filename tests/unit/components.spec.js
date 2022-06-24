import { nextTick } from 'vue'
import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import WelcomeScreen from '@/components/WelcomeScreen.vue'
import ShowBio from '@/components/ShowBio.vue'

let wrapper;
describe('WelcomeScreen.vue', () => {
  it('should have a welcome screen rendered', () => {
    // given
    wrapper = shallowMount(WelcomeScreen);
    //then
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("TV App POC");
  })
})

describe('Header.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(Header, {
      propsData: {
        filteredShows: []
      }
    });
  })

  it('should see if navbar exists', () => {
    // given
    const navbarDiv = wrapper.find(".navbar");
    //then
    expect(navbarDiv.exists()).toBe(true);
  })

  it('should see if ratingBtn exists and calls method', async () => {
    // given
    const ratingBtnDiv = wrapper.find(".ratingBtn");
    const emitSpy = jest.spyOn(wrapper.vm, 'emitRatingFilter');
    // when
    ratingBtnDiv.trigger('click');
    await nextTick();
    //then
    expect(ratingBtnDiv.exists()).toBe(true);
    expect(emitSpy).toHaveBeenCalled();
  })

  it('should see if aZbtn exists and calls method', async () => {
    // given
    const aZbuttonDiv = wrapper.find(".aZbutton");
    const emitSpy = jest.spyOn(wrapper.vm, 'emitAZFilter');
    // when
    aZbuttonDiv.trigger('click');
    await nextTick();
    //then
    expect(aZbuttonDiv.exists()).toBe(true);
    expect(emitSpy).toHaveBeenCalledTimes(1);
  })
})

describe('Header.vue', () => {
  it('should read filteredShows props', () => {
    // given
    wrapper = shallowMount(Header, {
      propsData: {
        filteredShows: 250
      }
  });
    //then
    expect(typeof wrapper.props().filteredShows).toBe('number')
  })
})
describe('showBio.vue', () => {
  it('should read showBio props', () => {
    // given
    wrapper = shallowMount(ShowBio, {
      propsData: {
        showInfo: {
          image: {
            medium: String
          },
          rating: {
            average: String
          }
        }
      }
  });
    //then
    expect(wrapper.exists()).toBe(true);
  })
})