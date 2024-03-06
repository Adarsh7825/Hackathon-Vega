import Post from "../components/Post";
import Meetups from "../components/Meetups";
import Title from "../components/Title";
import styles from "./Forum.module.css";

const Forum = () => {
  return (
    <div className={styles.forum}>
      <div className={styles.forumChild} />
      
      <section className={styles.frameGroup}>
        <div className={styles.mainWrapper}>
          <div className={styles.main}>
            <div className={styles.sidebarParent}>
              <div className={styles.sidebar}>
                <div className={styles.main1}>
                  <div className={styles.new}>
                    <div className={styles.main2}>
                      <div className={styles.newIcon}>
                        <div className={styles.icFiberNew24px2}>
                          <div className={styles.titleParent}>
                            <img
                              className={styles.titleIcon}
                              loading="lazy"
                              alt=""
                              src="/star-1.svg"
                            />
                            <b className={styles.new1}>New</b>
                          </div>
                        </div>
                      </div>
                      <div className={styles.title}>
                        <div className={styles.newestAndRecent}>
                          Newest and Recent
                        </div>
                        <div className={styles.findTheLatest}>
                          Find the latest update
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.popular}>
                    <div className={styles.main3}>
                      <div className={styles.popularIcon}>
                        <img
                          className={styles.popularIconChild}
                          loading="lazy"
                          alt=""
                          src="/frame-15.svg"
                        />
                      </div>
                      <div className={styles.title1}>
                        <div className={styles.popularOfThe}>
                          Popular of the day
                        </div>
                        <div className={styles.shotsFeaturedToday}>
                          Shots featured today by curators
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.following}>
                    <div className={styles.main4}>
                      <div className={styles.followingIcon}>
                        <img
                          className={styles.followIcon}
                          loading="lazy"
                          alt=""
                          src="/follow.svg"
                        />
                      </div>
                      <div className={styles.title2}>
                        <div className={styles.name}>
                          <div className={styles.following1}>Following</div>
                          <div className={styles.meetupsMainFrame}>
                            <div className={styles.dateFrameMeetup}>24</div>
                          </div>
                        </div>
                        <div className={styles.exploreFromYour}>
                          Explore from your favorite person
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.popularTags}>
                <div className={styles.main5}>
                  <div className={styles.title3}>
                    <h2 className={styles.popularTags1}>Popular Tags</h2>
                  </div>
                  <div className={styles.tags}>
                    <div className={styles.tag}>
                      <div className={styles.icon}>
                        <img className={styles.devIcon} loading="lazy" alt="" />
                      </div>
                      <div className={styles.name1}>
                        <div className={styles.javascript}>#Networking</div>
                        <div className={styles.postedByThis}>
                          82,645 Posted by this tag
                        </div>
                      </div>
                    </div>
                    <div className={styles.tag1}>
                      <div className={styles.icon1}>
                        <img
                          className={styles.bitcoinIcon}
                          alt=""
                          src="/bitcoin.svg"
                        />
                      </div>
                      <div className={styles.name2}>
                        <div className={styles.bitcoin}>#coverletter</div>
                        <div className={styles.postedTrending}>
                          65,523 Posted • Trending
                        </div>
                      </div>
                    </div>
                    <div className={styles.tag2}>
                      <div className={styles.icon2}>
                        <img
                          className={styles.designIcon}
                          alt=""
                          src="/design.svg"
                        />
                      </div>
                      <div className={styles.name3}>
                        <div className={styles.design}>#Jobopportunities</div>
                        <div className={styles.trendingInBangladesh}>
                          51,354 • Trending in Bangladesh
                        </div>
                      </div>
                    </div>
                    <div className={styles.tag3}>
                      <div className={styles.icon3}>
                        <img
                          className={styles.bloggingIcon}
                          alt=""
                          src="/blogging.svg"
                        />
                      </div>
                      <div className={styles.name4}>
                        <div className={styles.blogging}>#interviewtips</div>
                        <div className={styles.postedByThis1}>
                          48,029 Posted by this tag
                        </div>
                      </div>
                    </div>
                    <div className={styles.tag4}>
                      <div className={styles.icon4}>
                        <img
                          className={styles.tutorialIcon}
                          alt=""
                          src="/tutorial.svg"
                        />
                      </div>
                      <div className={styles.name5}>
                        <div className={styles.tutorial}>#Hiringprocess</div>
                        <div className={styles.trendingInBangladesh1}>
                          51,354 • Trending in Bangladesh
                        </div>
                      </div>
                    </div>
                    <div className={styles.tag5}>
                      <div className={styles.icon5}>
                        <img className={styles.seoIcon} alt="" src="/seo.svg" />
                      </div>
                      <div className={styles.name6}>
                        <div className={styles.seo}>#careergoals</div>
                        <div className={styles.postedByThis2}>
                          82,645 Posted by this tag
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pinnedGroup}>
                <div className={styles.main6}>
                  <div className={styles.title4}>
                    <div className={styles.title5}>
                      <h2 className={styles.pinnedGroup1}>Pinned Group</h2>
                      <img
                        className={styles.titleChild}
                        alt=""
                        src="/vector-17.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.tags1}>
                    <div className={styles.tag6}>
                      <img
                        className={styles.icon6}
                        loading="lazy"
                        alt=""
                        src="/icon1@2x.png"
                      />
                      <div className={styles.name7}>
                        <div className={styles.javascript1}>#javascript</div>
                        <div className={styles.postedByThis3}>
                          82,645 Posted by this tag
                        </div>
                      </div>
                    </div>
                    <div className={styles.tag7}>
                      <img
                        className={styles.icon7}
                        loading="lazy"
                        alt=""
                        src="/icon-11@2x.png"
                      />
                      <div className={styles.name8}>
                        <div className={styles.bitcoin1}>#bitcoin</div>
                        <div className={styles.postedTrending1}>
                          65,523 Posted • Trending
                        </div>
                      </div>
                    </div>
                    <div className={styles.tag8}>
                      <div className={styles.icon8}>
                        <img
                          className={styles.designIcon1}
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className={styles.name9}>
                        <div className={styles.design1}>#design</div>
                        <div className={styles.trendingInBangladesh2}>
                          51,354 • Trending in Bangladesh
                        </div>
                      </div>
                    </div>
                    <div className={styles.tag9}>
                      <img
                        className={styles.icon9}
                        loading="lazy"
                        alt=""
                        src="/icon-21@2x.png"
                      />
                      <div className={styles.name10}>
                        <div className={styles.blogging1}>#blogging</div>
                        <div className={styles.postedByThis4}>
                          48,029 Posted by this tag
                        </div>
                      </div>
                    </div>
                    <div className={styles.tag10}>
                      <img
                        className={styles.icon10}
                        loading="lazy"
                        alt=""
                        src="/icon-31@2x.png"
                      />
                      <div className={styles.name11}>
                        <div className={styles.tutorial1}>#tutorial</div>
                        <div className={styles.trendingInBangladesh3}>
                          51,354 • Trending in Bangladesh
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.main7}>
              <div className={styles.creatPost}>
                <div className={styles.main8}>
                  <img
                    className={styles.abatarsIcon}
                    loading="lazy"
                    alt=""
                    src="/abatars@2x.png"
                  />
                  <input
                    className={styles.inputData}
                    placeholder="Let’s share what going on your mind..."
                    type="text"
                  />
                  <button className={styles.button}>
                    <div className={styles.createPost}>Create Post</div>
                  </button>
                </div>
              </div>
              <div className={styles.post}>
                <div className={styles.main9}>
                  <div className={styles.wrapperTagRectangle}>
                    <img
                      className={styles.tagRectangleIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-24@2x.png"
                    />
                  </div>
                  <div className={styles.data}>
                    <div className={styles.data1}>
                      <div className={styles.title6}>
                        <h2 className={styles.bitcoinHasTumbled}>
                          Job Search Hacks: Insider Tips from Industry Experts
                        </h2>
                        <div className={styles.tags2}>
                          <button className={styles.tag11}>
                            <div className={styles.finance}>finance</div>
                          </button>
                          <button className={styles.tag12}>
                            <div className={styles.bitcoin2}>bitcoin</div>
                          </button>
                          <button className={styles.tag13}>
                            <div className={styles.crypto}>crypto</div>
                          </button>
                        </div>
                      </div>
                      <div className={styles.user}>
                        <div className={styles.avatars2}>
                          <div className={styles.memojiBoys} />
                          <img
                            className={styles.memojiBoys315}
                            loading="lazy"
                            alt=""
                            src="/memoji-boys-315@2x.png"
                          />
                        </div>
                        <div className={styles.name12}>
                          <div className={styles.name13}>
                            <div className={styles.name14}>
                              <h3 className={styles.pavelGvay}>Pavel Gvay</h3>
                              <div className={styles.views} />
                            </div>
                            <div className={styles.weeksAgo}>3 weeks ago</div>
                          </div>
                          <div className={styles.action}>
                            <div className={styles.views1}>651,324 Views</div>
                            <div className={styles.likes}>36,6545 Likes</div>
                            <h3 className={styles.comments}>56 comments</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.love}>
                      <img
                        className={styles.iconlike}
                        loading="lazy"
                        alt=""
                        src="/iconlike@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Post
                rectangle24="/rectangle-24-1@2x.png"
                bitcoinHasTumbledFromItsR="Negotiating Salary: Tips for Getting What You Deserve"
                finance="Negotiations"
                bitcoin="salary"
                crypto1="Jobs"
                memojiBoys315="/memoji-boys-315-1@2x.png"
                pavelGvay="AR Jakir"
                weeksAgo="3 days ago"
                views="244,564 Views"
                likes="10,920 Likes"
                comments="184 comments"
              />
              <Post
                rectangle24="/rectangle-24-2@2x.png"
                bitcoinHasTumbledFromItsR="Ace Your Cover Letter: Writing Techniques That Capture Attention"
                finance="coverletter"
                bitcoin="Jobtips"
                crypto1="writing"
                memojiBoys315="/memoji-boys-315-2@2x.png"
                pavelGvay="Mansurul Haque"
                weeksAgo="1 week ago"
                views="601,066 Views"
                likes="24,753 Likes"
                comments="209 comments"
                propBackgroundColor="#5c6267"
                propBackgroundColor1="#e0e2fd"
              />
              <div className={styles.post1}>
                <div className={styles.main10}>
                  <div className={styles.wrapperRectangle24}>
                    <img
                      className={styles.wrapperRectangle24Child}
                      loading="lazy"
                      alt=""
                      src="/rectangle-24-3@2x.png"
                    />
                  </div>
                  <div className={styles.data2}>
                    <div className={styles.data3}>
                      <div className={styles.title7}>
                        <h2 className={styles.bitcoinHasTumbledContainer}>
                          <p className={styles.whatShouldI}>
                            What should I expect in a behavioral interview, and
                            how can I prepare?
                          </p>
                          <p className={styles.byMichalMalewicz}>
                            by Michal Malewicz
                          </p>
                        </h2>
                        <div className={styles.tags3}>
                          <button className={styles.tag14}>
                            <div className={styles.finance1}>Jobready</div>
                          </button>
                          <button className={styles.tag15}>
                            <div className={styles.bitcoin3}>Interview</div>
                          </button>
                          <button className={styles.tag16}>
                            <div className={styles.crypto1}>Prepguide</div>
                          </button>
                        </div>
                      </div>
                      <div className={styles.user1}>
                        <div className={styles.avatars3}>
                          <div className={styles.avatarsChild} />
                          <img
                            className={styles.memojiBoys3151}
                            loading="lazy"
                            alt=""
                            src="/memoji-boys-315@2x.png"
                          />
                        </div>
                        <div className={styles.name15}>
                          <div className={styles.name16}>
                            <div className={styles.name17}>
                              <h3 className={styles.pavelGvay1}>
                                Michal Malewicz
                              </h3>
                              <div className={styles.nameChild} />
                            </div>
                            <div className={styles.weeksAgo1}>2 weeks ago</div>
                          </div>
                          <div className={styles.action1}>
                            <div className={styles.views2}>964,258 Views</div>
                            <div className={styles.likes1}>64,755 Likes</div>
                            <h3 className={styles.comments1}>44 comments</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.love1}>
                      <img
                        className={styles.iconlike1}
                        loading="lazy"
                        alt=""
                        src="/iconlike@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.titleContainer}>
              <div className={styles.rectangleParent}>
                <div className={styles.meetups}>
                  <div className={styles.main11}>
                    <div className={styles.title8}>
                      <h2 className={styles.meetups1}>Job fairs</h2>
                      <img
                        className={styles.titleItem}
                        loading="lazy"
                        alt=""
                        src="/vector-17.svg"
                      />
                    </div>
                    <Meetups
                      prop="7"
                      uIHUTCrunchbaseCompanyPro="Tech Crunchbase Company  Expo"
                      rectangle32="/rectangle-32@2x.png"
                      uIHUTSylhetBangladesh="  •  New delhi"
                      remote="Remote"
                      partTime="Part-time"
                    />
                    <div className={styles.meetups11}>
                      <div className={styles.date}>
                        <h3 className={styles.feb}>FEB</h3>
                        <b className={styles.blankSeparator}>3</b>
                      </div>
                      <div className={styles.data4}>
                        <Title
                          employmentExpeditionNavig="Employment Expedition: Navigating "
                          yourPathToSuccess="Your Path to Success"
                          rectangle32="/rectangle-32@2x.png"
                          dribbbleAustinTexasUSA="Pune, Maharashtra."
                        />
                        <div className={styles.tags4}>
                          <div className={styles.tag17}>
                            <div className={styles.remote}>Remote</div>
                          </div>
                          <div className={styles.tag18}>
                            <div className={styles.partTime}>Part-time</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.meetups2}>
                      <div className={styles.date1}>
                        <h3 className={styles.feb1}>FEB</h3>
                        <b className={styles.b}>5</b>
                      </div>
                      <div className={styles.data5}>
                        <Title
                          employmentExpeditionNavig="Career Catalyst Expo: Igniting Futures,"
                          yourPathToSuccess=" Connecting Paths"
                          rectangle32="/rectangle-32@2x.png"
                          dribbbleAustinTexasUSA="IISC  •  Bangalore, Karnataka."
                          propAlignSelf="stretch"
                        />
                        <div className={styles.tags5}>
                          <div className={styles.tag19}>
                            <div className={styles.fullTime}>Full Time</div>
                          </div>
                          <div className={styles.tag20}>
                            <div className={styles.contract}>Contract</div>
                          </div>
                          <div className={styles.tag21}>
                            <div className={styles.worldwide}>Worldwide</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className={styles.podcasts}>
                <div className={styles.main12}>
                  <div className={styles.title9}>
                    <h2 className={styles.podcasts1}>Podcasts</h2>
                    <img
                      className={styles.titleInner}
                      alt=""
                      src="/vector-17.svg"
                    />
                  </div>
                  <div className={styles.podcasts2}>
                    <img
                      className={styles.nameElementsIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-54@2x.png"
                    />
                    <div className={styles.name18}>
                      <div className={styles.title10}>
                        <div className={styles.sellingABusiness}>
                          Selling a Business and Scaling Another Amidst Tragedy.
                        </div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector-17-3.svg"
                        />
                      </div>
                      <div className={styles.byMicheleHansen}>
                        by Michele Hansen
                      </div>
                    </div>
                  </div>
                  <div className={styles.podcasts3}>
                    <img
                      className={styles.podcastsChild}
                      loading="lazy"
                      alt=""
                      src="/rectangle-55@2x.png"
                    />
                    <div className={styles.name19}>
                      <div className={styles.title11}>
                        <div className={styles.mentalHealthAs}>
                          Mental health as a founder and the importance of
                          community...
                        </div>
                        <img
                          className={styles.titleChild1}
                          alt=""
                          src="/vector-17-3.svg"
                        />
                      </div>
                      <div className={styles.byJamesMckinven}>
                        by James McKinven
                      </div>
                    </div>
                  </div>
                  <div className={styles.podcasts4}>
                    <img
                      className={styles.podcastsItem}
                      loading="lazy"
                      alt=""
                      src="/rectangle-56@2x.png"
                    />
                    <div className={styles.name20}>
                      <div className={styles.title12}>
                        <div className={styles.growingTo85k}>
                          Growing to $8.5k MRR in 1 year - Marie Martens,
                          Tally.so
                        </div>
                        <img
                          className={styles.titleChild2}
                          alt=""
                          src="/vector-17-3.svg"
                        />
                      </div>
                      <div className={styles.byMahfuzulNabil}>
                        by Mahfuzul Nabil
                      </div>
                    </div>
                  </div>
                  <div className={styles.podcasts5}>
                    <img
                      className={styles.podcastsInner}
                      loading="lazy"
                      alt=""
                      src="/rectangle-56-1@2x.png"
                    />
                    <div className={styles.name21}>
                      <div className={styles.title13}>
                        <div className={styles.mentalHealthAnd}>
                          Mental Health and Bootstrapping in 2022 with Rob
                          Walling of TinySe
                        </div>
                        <img
                          className={styles.titleChild3}
                          loading="lazy"
                          alt=""
                          src="/vector-17-3.svg"
                        />
                      </div>
                      <div className={styles.byDrJubed}>by Dr. Jubed</div>
                    </div>
                  </div>
                  <div className={styles.podcasts6}>
                    <img
                      className={styles.rectangleIcon}
                      loading="lazy"
                      alt=""
                      src="/rectangle-56-2@2x.png"
                    />
                    <div className={styles.name22}>
                      <div className={styles.title14}>
                        <div className={styles.moneyHappinessAnd}>
                          Money, Happiness, and Productivity as a Solo Founder
                          with Pieter Levels
                        </div>
                        <img
                          className={styles.titleChild4}
                          alt=""
                          src="/vector-17-3.svg"
                        />
                      </div>
                      <div className={styles.byJesseHanley}>
                        by Jesse Hanley
                      </div>
                    </div>
                  </div>
                  <div className={styles.podcasts7}>
                    <img
                      className={styles.podcastsChild1}
                      loading="lazy"
                      alt=""
                      src="/rectangle-56-3@2x.png"
                    />
                    <div className={styles.name23}>
                      <div className={styles.title15}>
                        <div className={styles.mentalHealthAs1}>
                          Mental health as a founder and the importance of
                          community
                        </div>
                        <img
                          className={styles.titleChild5}
                          alt=""
                          src="/vector-17-3.svg"
                        />
                      </div>
                      <div className={styles.byCourtlandAllen}>
                        by Courtland Allen
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forum;
