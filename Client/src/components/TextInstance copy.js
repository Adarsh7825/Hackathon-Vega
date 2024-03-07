import DayHeader from "./DayHeader";
import Day from "./Day";
import HourRow from "./HourRow1";
import Event1 from "./Event1";
import styles from "./TextInstance.module.css";

const TextInstance = () => {
  return (
    <section className={styles.textInstance}>
      <div className={styles.aMPM}>
        <h1 className={styles.calender}>Calender</h1>
      </div>
      <div className={styles.headerFrame}>
        <div className={styles.arrowRow}>
          <div className={styles.leftMenu}>
            <div className={styles.top}>
              <div className={styles.iconButton}>
                <div className={styles.iconButtonMaster}>
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.date}>
              <div className={styles.rowFrame}>
                <h1 className={styles.february}>February</h1>
                <div className={styles.timeBlock}>2021</div>
              </div>
              <div className={styles.hour}>
                <img
                  className={styles.chevronLeftIcon}
                  loading="lazy"
                  alt=""
                  src="/chevronleft.svg"
                />
                <img
                  className={styles.chevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/chevronright.svg"
                />
              </div>
            </div>
            <div className={styles.miniCalendar}>
              <div className={styles.header}>
                <DayHeader day="SUN" />
                <DayHeader day="MON" />
                <DayHeader day="TUE" />
                <DayHeader day="WED" />
                <DayHeader day="THU" />
                <DayHeader day="FRI" />
                <DayHeader day="SAT" />
              </div>
              <div className={styles.week}>
                <div className={styles.day}>
                  <div className={styles.day1}>31</div>
                  <div className={styles.eventDots}>
                    <div className={styles.dot} />
                    <div className={styles.dot1} />
                    <div className={styles.dot2} />
                  </div>
                </div>
                <div className={styles.day2}>
                  <div className={styles.day3}>1</div>
                  <div className={styles.eventDots1}>
                    <div className={styles.dot3} />
                    <div className={styles.dot4} />
                    <div className={styles.dot5} />
                  </div>
                </div>
                <div className={styles.day4}>
                  <div className={styles.day5}>2</div>
                  <div className={styles.eventDots2}>
                    <div className={styles.dot6} />
                    <div className={styles.dot7} />
                    <div className={styles.dot8} />
                  </div>
                </div>
                <div className={styles.day6}>
                  <div className={styles.day7}>3</div>
                  <div className={styles.eventDots3}>
                    <div className={styles.dot9} />
                    <div className={styles.dot10} />
                    <div className={styles.dot11} />
                  </div>
                </div>
                <div className={styles.day8}>
                  <div className={styles.day9}>4</div>
                  <div className={styles.eventDots4}>
                    <div className={styles.dot12} />
                    <div className={styles.dot13} />
                    <div className={styles.dot14} />
                  </div>
                </div>
                <div className={styles.day10}>
                  <div className={styles.day11}>5</div>
                  <div className={styles.eventDots5}>
                    <div className={styles.dot15} />
                    <div className={styles.dot16} />
                    <div className={styles.dot17} />
                  </div>
                </div>
                <div className={styles.day12}>
                  <div className={styles.day13}>6</div>
                  <div className={styles.eventDots6}>
                    <div className={styles.dot18} />
                    <div className={styles.dot19} />
                    <div className={styles.dot20} />
                  </div>
                </div>
              </div>
              <div className={styles.week1}>
                <div className={styles.day14}>
                  <div className={styles.day15}>7</div>
                  <div className={styles.eventDots7}>
                    <div className={styles.dot21} />
                    <div className={styles.dot22} />
                    <div className={styles.dot23} />
                  </div>
                </div>
                <div className={styles.day16}>
                  <div className={styles.day17}>8</div>
                  <div className={styles.eventDots8}>
                    <div className={styles.dot24} />
                    <div className={styles.dot25} />
                    <div className={styles.dot26} />
                  </div>
                </div>
                <div className={styles.day18}>
                  <div className={styles.day19}>9</div>
                  <div className={styles.eventDots9}>
                    <div className={styles.dot27} />
                    <div className={styles.dot28} />
                    <div className={styles.dot29} />
                  </div>
                </div>
                <div className={styles.day20}>
                  <div className={styles.day21}>10</div>
                  <div className={styles.eventDots10}>
                    <div className={styles.dot30} />
                    <div className={styles.dot31} />
                    <div className={styles.dot32} />
                  </div>
                </div>
                <div className={styles.day22}>
                  <div className={styles.day23}>11</div>
                  <div className={styles.eventDots11}>
                    <div className={styles.dot33} />
                    <div className={styles.dot34} />
                    <div className={styles.dot35} />
                  </div>
                </div>
                <div className={styles.day24}>
                  <div className={styles.day25}>12</div>
                  <div className={styles.eventDots12}>
                    <div className={styles.dot36} />
                    <div className={styles.dot37} />
                    <div className={styles.dot38} />
                  </div>
                </div>
                <div className={styles.day26}>
                  <div className={styles.day27}>13</div>
                  <div className={styles.eventDots13}>
                    <div className={styles.dot39} />
                    <div className={styles.dot40} />
                    <div className={styles.dot41} />
                  </div>
                </div>
              </div>
              <div className={styles.week2}>
                <div className={styles.day28}>
                  <div className={styles.day29}>14</div>
                  <div className={styles.eventDots14}>
                    <div className={styles.dot42} />
                    <div className={styles.dot43} />
                    <div className={styles.dot44} />
                  </div>
                </div>
                <div className={styles.day30}>
                  <div className={styles.day31}>15</div>
                  <div className={styles.eventDots15}>
                    <div className={styles.dot45} />
                    <div className={styles.dot46} />
                    <div className={styles.dot47} />
                  </div>
                </div>
                <div className={styles.day32}>
                  <div className={styles.day33}>16</div>
                  <div className={styles.eventDots16}>
                    <div className={styles.dot48} />
                    <div className={styles.dot49} />
                    <div className={styles.dot50} />
                  </div>
                </div>
                <div className={styles.day34}>
                  <div className={styles.day35}>17</div>
                  <div className={styles.eventDots17}>
                    <div className={styles.dot51} />
                    <div className={styles.dot52} />
                    <div className={styles.dot53} />
                  </div>
                </div>
                <div className={styles.day36}>
                  <div className={styles.day37}>18</div>
                  <div className={styles.eventDots18}>
                    <div className={styles.dot54} />
                    <div className={styles.dot55} />
                    <div className={styles.dot56} />
                  </div>
                </div>
                <div className={styles.day38}>
                  <div className={styles.day39}>19</div>
                  <div className={styles.eventDots19}>
                    <div className={styles.dot57} />
                    <div className={styles.dot58} />
                    <div className={styles.dot59} />
                  </div>
                </div>
                <div className={styles.day40}>
                  <div className={styles.day41}>20</div>
                  <div className={styles.eventDots20}>
                    <div className={styles.dot60} />
                    <div className={styles.dot61} />
                    <div className={styles.dot62} />
                  </div>
                </div>
              </div>
              <div className={styles.week3}>
                <div className={styles.day42}>
                  <div className={styles.day43}>21</div>
                  <div className={styles.eventDots21}>
                    <div className={styles.dot63} />
                    <div className={styles.dot64} />
                    <div className={styles.dot65} />
                  </div>
                </div>
                <div className={styles.day44}>
                  <div className={styles.day45}>22</div>
                  <div className={styles.eventDots22}>
                    <div className={styles.dot66} />
                    <div className={styles.dot67} />
                    <div className={styles.dot68} />
                  </div>
                </div>
                <div className={styles.day46}>
                  <div className={styles.day47}>23</div>
                  <div className={styles.eventDots23}>
                    <div className={styles.dot69} />
                    <div className={styles.dot70} />
                    <div className={styles.dot71} />
                  </div>
                </div>
                <div className={styles.day48}>
                  <div className={styles.day49}>24</div>
                  <div className={styles.eventDots24}>
                    <div className={styles.dot72} />
                    <div className={styles.dot73} />
                    <div className={styles.dot74} />
                  </div>
                </div>
                <div className={styles.day50}>
                  <div className={styles.day51}>25</div>
                  <div className={styles.eventDots25}>
                    <div className={styles.dot75} />
                    <div className={styles.dot76} />
                    <div className={styles.dot77} />
                  </div>
                </div>
                <div className={styles.day52}>
                  <div className={styles.day53}>26</div>
                  <div className={styles.eventDots26}>
                    <div className={styles.dot78} />
                    <div className={styles.dot79} />
                    <div className={styles.dot80} />
                  </div>
                </div>
                <div className={styles.day54}>
                  <div className={styles.dayParent}>
                    <div className={styles.day55}>27</div>
                    <div className={styles.eventDots27}>
                      <div className={styles.dot81} />
                      <div className={styles.dot82} />
                      <div className={styles.dot83} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.week4}>
                <div className={styles.day56}>
                  <div className={styles.day57}>28</div>
                  <div className={styles.eventDots28}>
                    <div className={styles.dot84} />
                    <div className={styles.dot85} />
                    <div className={styles.dot86} />
                  </div>
                </div>
                <div className={styles.day58}>
                  <div className={styles.day59}>1</div>
                  <div className={styles.eventDots29}>
                    <div className={styles.dot87} />
                    <div className={styles.dot88} />
                    <div className={styles.dot89} />
                  </div>
                </div>
                <div className={styles.day60}>
                  <div className={styles.day61}>2</div>
                  <div className={styles.eventDots30}>
                    <div className={styles.dot90} />
                    <div className={styles.dot91} />
                    <div className={styles.dot92} />
                  </div>
                </div>
                <div className={styles.day62}>
                  <div className={styles.day63}>3</div>
                  <div className={styles.eventDots31}>
                    <div className={styles.dot93} />
                    <div className={styles.dot94} />
                    <div className={styles.dot95} />
                  </div>
                </div>
                <div className={styles.day64}>
                  <div className={styles.day65}>4</div>
                  <div className={styles.eventDots32}>
                    <div className={styles.dot96} />
                    <div className={styles.dot97} />
                    <div className={styles.dot98} />
                  </div>
                </div>
                <div className={styles.day66}>
                  <div className={styles.day67}>5</div>
                  <div className={styles.eventDots33}>
                    <div className={styles.dot99} />
                    <div className={styles.dot100} />
                    <div className={styles.dot101} />
                  </div>
                </div>
                <div className={styles.day68}>
                  <div className={styles.day69}>6</div>
                  <div className={styles.eventDots34}>
                    <div className={styles.dot102} />
                    <div className={styles.dot103} />
                    <div className={styles.dot104} />
                  </div>
                </div>
              </div>
              <div className={styles.week5}>
                <div className={styles.day70}>
                  <div className={styles.day71}>7</div>
                  <div className={styles.eventDots35}>
                    <div className={styles.dot105} />
                    <div className={styles.dot106} />
                    <div className={styles.dot107} />
                  </div>
                </div>
                <div className={styles.day72}>
                  <div className={styles.day73}>8</div>
                  <div className={styles.eventDots36}>
                    <div className={styles.dot108} />
                    <div className={styles.dot109} />
                    <div className={styles.dot110} />
                  </div>
                </div>
                <div className={styles.day74}>
                  <div className={styles.day75}>9</div>
                  <div className={styles.eventDots37}>
                    <div className={styles.dot111} />
                    <div className={styles.dot112} />
                    <div className={styles.dot113} />
                  </div>
                </div>
                <div className={styles.day76}>
                  <div className={styles.day77}>10</div>
                  <div className={styles.eventDots38}>
                    <div className={styles.dot114} />
                    <div className={styles.dot115} />
                    <div className={styles.dot116} />
                  </div>
                </div>
                <div className={styles.day78}>
                  <div className={styles.day79}>11</div>
                  <div className={styles.eventDots39}>
                    <div className={styles.dot117} />
                    <div className={styles.dot118} />
                    <div className={styles.dot119} />
                  </div>
                </div>
                <div className={styles.day80}>
                  <div className={styles.day81}>12</div>
                  <div className={styles.eventDots40}>
                    <div className={styles.dot120} />
                    <div className={styles.dot121} />
                    <div className={styles.dot122} />
                  </div>
                </div>
                <div className={styles.day82}>
                  <div className={styles.day83}>13</div>
                  <div className={styles.eventDots41}>
                    <div className={styles.dot123} />
                    <div className={styles.dot124} />
                    <div className={styles.dot125} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dayHeaderParent}>
              <div className={styles.dayHeader}>
                <div className={styles.left}>
                  <b className={styles.today}>TODAY</b>
                  <div className={styles.blockA}> 2/27/2021</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.temp}>
                    <b className={styles.b}>55º</b>
                    <div className={styles.div}>/40º</div>
                  </div>
                  <img
                    className={styles.sunIcon}
                    loading="lazy"
                    alt=""
                    src="/sun.svg"
                  />
                </div>
              </div>
              <div className={styles.allDayEvent}>
                <div className={styles.allHandsCompanyMeeting}>
                  All-Hands Company Meeting
                </div>
              </div>
              <div className={styles.dayToggle}>
                <div className={styles.fieldMaster}>
                  <div className={styles.frameParent}>
                    <div className={styles.frameGroup}>
                      <div className={styles.arrowsSetWrapper}>
                        <div className={styles.arrowsSet} />
                      </div>
                      <div className={styles.start}>8:30</div>
                      <div className={styles.div1}>–</div>
                      <div className={styles.end}>9:00</div>
                      <div className={styles.ampm}>AM</div>
                    </div>
                    <div className={styles.textInput}>
                      <img
                        className={styles.videoCameraIcon}
                        loading="lazy"
                        alt=""
                        src="/videocamera.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.monthlyCatchUpWrapper}>
                    <div className={styles.monthlyCatchUp}>
                      Monthly catch-up
                    </div>
                  </div>
                </div>
                <div className={styles.fieldMaster1}>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameDiv}>
                      <div className={styles.ellipseWrapper}>
                        <div className={styles.frameChild} />
                      </div>
                      <div className={styles.start1}>8:30</div>
                      <div className={styles.div2}>–</div>
                      <div className={styles.end1}>9:00</div>
                      <div className={styles.ampm1}>AM</div>
                    </div>
                    <div className={styles.videoCameraWrapper}>
                      <img
                        className={styles.videoCameraIcon1}
                        loading="lazy"
                        alt=""
                        src="/videocamera.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.quarterlyReviewWrapper}>
                    <div className={styles.quarterlyReview}>
                      Quarterly review
                    </div>
                  </div>
                </div>
                <div className={styles.httpszoomusi1983475281Wrapper}>
                  <div className={styles.httpszoomusi1983475281}>
                    https://zoom.us/i/1983475281
                  </div>
                </div>
              </div>
              <div className={styles.dayHeader1}>
                <div className={styles.left1}>
                  <b className={styles.tomorrow}>TOMORROW</b>
                  <div className={styles.div3}> 2/28/2021</div>
                </div>
                <div className={styles.right1}>
                  <div className={styles.temp1}>
                    <b className={styles.b1}>55º</b>
                    <div className={styles.div4}>/40º</div>
                  </div>
                  <img
                    className={styles.sunIcon1}
                    loading="lazy"
                    alt=""
                    src="/sun.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.ellipseContainer}>
                      <div className={styles.frameItem} />
                    </div>
                    <div className={styles.start2}>8:30</div>
                    <div className={styles.div5}>–</div>
                    <div className={styles.end2}>9:00</div>
                    <div className={styles.ampm2}>AM</div>
                  </div>
                  <div className={styles.videoCameraContainer}>
                    <img
                      className={styles.videoCameraIcon2}
                      loading="lazy"
                      alt=""
                      src="/videocamera.svg"
                    />
                  </div>
                </div>
                <div className={styles.visitToDiscussImprovementsWrapper}>
                  <div className={styles.visitToDiscuss}>
                    Visit to discuss improvements
                  </div>
                </div>
                <div className={styles.httpszoomusi1983475281Container}>
                  <div className={styles.httpszoomusi19834752811}>
                    https://zoom.us/i/1983475281
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frameParent5}>
                  <div className={styles.frameParent6}>
                    <div className={styles.ellipseFrame}>
                      <div className={styles.frameInner} />
                    </div>
                    <div className={styles.start3}>8:30</div>
                    <div className={styles.div6}>–</div>
                    <div className={styles.end3}>9:00</div>
                    <div className={styles.ampm3}>AM</div>
                  </div>
                  <div className={styles.videoCameraFrame}>
                    <img
                      className={styles.videoCameraIcon3}
                      loading="lazy"
                      alt=""
                      src="/videocamera.svg"
                    />
                  </div>
                </div>
                <div className={styles.presentationOfNewProductsAWrapper}>
                  <div className={styles.presentationOfNew}>
                    Presentation of new products and cost structure
                  </div>
                </div>
              </div>
              <div className={styles.dayHeader2}>
                <div className={styles.left2}>
                  <b className={styles.monday}>MONDAY</b>
                  <div className={styles.div7}>3/1/2021</div>
                </div>
                <div className={styles.right2}>
                  <div className={styles.temp2}>
                    <b className={styles.b2}>55º</b>
                    <div className={styles.div8}>/40º</div>
                  </div>
                  <img
                    className={styles.cloudIcon}
                    loading="lazy"
                    alt=""
                    src="/cloud.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.frameParent8}>
                  <div className={styles.frameParent9}>
                    <div className={styles.ellipseWrapper1}>
                      <div className={styles.ellipseDiv} />
                    </div>
                    <div className={styles.start4}>8:30</div>
                    <div className={styles.div9}>–</div>
                    <div className={styles.end4}>9:00</div>
                    <div className={styles.ampm4}>AM</div>
                  </div>
                  <div className={styles.videoCameraWrapper1}>
                    <img
                      className={styles.videoCameraIcon4}
                      loading="lazy"
                      alt=""
                      src="/videocamera.svg"
                    />
                  </div>
                </div>
                <div className={styles.citySalesPitchWrapper}>
                  <div className={styles.citySalesPitch}>City Sales Pitch</div>
                </div>
                <div className={styles.httpszoomusi1983475281Frame}>
                  <div className={styles.httpszoomusi19834752812}>
                    https://zoom.us/i/1983475281
                  </div>
                </div>
              </div>
              <div className={styles.dayHeader3}>
                <div className={styles.left3}>
                  <b className={styles.tuesday}>TUESDAY</b>
                  <div className={styles.div10}>3/2/2021</div>
                </div>
                <div className={styles.right3}>
                  <div className={styles.temp3}>
                    <b className={styles.b3}>55º</b>
                    <div className={styles.div11}>/40º</div>
                  </div>
                  <img
                    className={styles.cloudIcon1}
                    loading="lazy"
                    alt=""
                    src="/cloud.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.frameParent11}>
                  <div className={styles.frameParent12}>
                    <div className={styles.ellipseWrapper2}>
                      <div className={styles.frameChild1} />
                    </div>
                    <div className={styles.start5}>8:30</div>
                    <div className={styles.div12}>–</div>
                    <div className={styles.end5}>9:00</div>
                    <div className={styles.ampm5}>AM</div>
                  </div>
                  <div className={styles.videoCameraWrapper2}>
                    <img
                      className={styles.videoCameraIcon5}
                      loading="lazy"
                      alt=""
                      src="/videocamera.svg"
                    />
                  </div>
                </div>
                <div className={styles.visitToDiscussImprovementsContainer}>
                  <div className={styles.visitToDiscuss1}>
                    Visit to discuss improvements
                  </div>
                </div>
              </div>
              <div className={styles.dayHeader4}>
                <div className={styles.left4}>
                  <b className={styles.wednesday}>WEDNESDAY</b>
                  <div className={styles.div13}>3/3/2021</div>
                </div>
                <div className={styles.right4}>
                  <div className={styles.temp4}>
                    <b className={styles.b4}>55º</b>
                    <div className={styles.div14}>/40º</div>
                  </div>
                  <img
                    className={styles.cloudIcon2}
                    loading="lazy"
                    alt=""
                    src="/cloud.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent13}>
                <div className={styles.frameParent14}>
                  <div className={styles.frameParent15}>
                    <div className={styles.ellipseWrapper3}>
                      <div className={styles.frameChild2} />
                    </div>
                    <div className={styles.start6}>8:30</div>
                    <div className={styles.div15}>–</div>
                    <div className={styles.end6}>9:00</div>
                    <div className={styles.ampm6}>AM</div>
                  </div>
                  <div className={styles.videoCameraWrapper3}>
                    <img
                      className={styles.videoCameraIcon6}
                      loading="lazy"
                      alt=""
                      src="/videocamera.svg"
                    />
                  </div>
                </div>
                <div className={styles.meetingToTalkAboutRossConWrapper}>
                  <div
                    className={styles.meetingToTalk}
                  >{`Meeting to talk about Ross contract. `}</div>
                </div>
              </div>
              <div className={styles.frameParent16}>
                <div className={styles.frameParent17}>
                  <div className={styles.frameParent18}>
                    <div className={styles.ellipseWrapper4}>
                      <div className={styles.frameChild3} />
                    </div>
                    <div className={styles.start7}>8:30</div>
                    <div className={styles.div16}>–</div>
                    <div className={styles.end7}>9:00</div>
                    <div className={styles.ampm7}>AM</div>
                  </div>
                  <div className={styles.videoCameraWrapper4}>
                    <img
                      className={styles.videoCameraIcon7}
                      loading="lazy"
                      alt=""
                      src="/videocamera.svg"
                    />
                  </div>
                </div>
                <div className={styles.meetingToDiscussTheNewProWrapper}>
                  <div className={styles.meetingToDiscuss}>
                    Meeting to discuss the new proposal
                  </div>
                </div>
              </div>
              <div className={styles.dayHeader5}>
                <div className={styles.left5}>
                  <b className={styles.thursday}>THURSDAY</b>
                  <div className={styles.div17}>3/4/2021</div>
                </div>
                <div className={styles.right5}>
                  <div className={styles.temp5}>
                    <b className={styles.b5}>55º</b>
                    <div className={styles.div18}>/40º</div>
                  </div>
                  <img
                    className={styles.sunIcon2}
                    loading="lazy"
                    alt=""
                    src="/sun.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent19}>
                <div className={styles.frameParent20}>
                  <div className={styles.ellipseWrapper5}>
                    <div className={styles.frameChild4} />
                  </div>
                  <div className={styles.startParent}>
                    <div className={styles.start8}>8:30</div>
                    <div className={styles.div19}>–</div>
                  </div>
                  <div className={styles.end8}>9:00</div>
                  <div className={styles.ampm8}>AM</div>
                  <div className={styles.blockF}>
                    <img
                      className={styles.videoCameraIcon8}
                      alt=""
                      src="/videocamera.svg"
                    />
                  </div>
                </div>
                <div className={styles.monthlyCatchUpContainer}>
                  <div className={styles.monthlyCatchUp1}>Monthly catch-up</div>
                </div>
                <div className={styles.httpszoomusi1983475281Wrapper1}>
                  <div className={styles.httpszoomusi19834752813}>
                    https://zoom.us/i/1983475281
                  </div>
                </div>
              </div>
              <div className={styles.dayHeader6}>
                <div className={styles.left6}>
                  <b className={styles.friday}>FRIDAY</b>
                  <div className={styles.div20}>3/5/2021</div>
                </div>
                <div className={styles.right6}>
                  <div className={styles.temp6}>
                    <b className={styles.b6}>55º</b>
                    <div className={styles.div21}>/40º</div>
                  </div>
                  <img
                    className={styles.sunIcon3}
                    loading="lazy"
                    alt=""
                    src="/sun.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent21}>
                <div className={styles.frameParent22}>
                  <div className={styles.ellipseWrapper6}>
                    <div className={styles.frameChild5} />
                  </div>
                  <div className={styles.startGroup}>
                    <div className={styles.start9}>8:30</div>
                    <div className={styles.div22}>–</div>
                  </div>
                  <div className={styles.end9}>9:00</div>
                  <div className={styles.ampm9}>AM</div>
                  <div className={styles.videoCameraWrapper5}>
                    <img
                      className={styles.videoCameraIcon9}
                      loading="lazy"
                      alt=""
                      src="/videocamera.svg"
                    />
                  </div>
                </div>
                <div className={styles.followUpProposalWrapper}>
                  <div className={styles.followUpProposal}>
                    Follow up proposal
                  </div>
                </div>
              </div>
              <div className={styles.frameParent23}>
                <div className={styles.frameParent24}>
                  <div className={styles.ellipseWrapper7}>
                    <div className={styles.frameChild6} />
                  </div>
                  <div className={styles.startContainer}>
                    <div className={styles.start10}>8:30</div>
                    <div className={styles.div23}>–</div>
                  </div>
                  <div className={styles.end10}>9:00</div>
                  <div className={styles.ampm10}>AM</div>
                  <div className={styles.videoCameraWrapper6}>
                    <img
                      className={styles.videoCameraIcon10}
                      alt=""
                      src="/videocamera.svg"
                    />
                  </div>
                </div>
                <div className={styles.citySalesPitchContainer}>
                  <div className={styles.citySalesPitch1}>City Sales Pitch</div>
                </div>
              </div>
              <div className={styles.dayHeader7}>
                <div className={styles.left7}>
                  <b className={styles.saturday}>SATURDAY</b>
                  <div className={styles.div24}>3/6/2021</div>
                </div>
                <div className={styles.right7}>
                  <div className={styles.temp7}>
                    <b className={styles.b7}>55º</b>
                    <div className={styles.div25}>/40º</div>
                  </div>
                  <img
                    className={styles.sunIcon4}
                    loading="lazy"
                    alt=""
                    src="/sun.svg"
                  />
                </div>
              </div>
              <div className={styles.allDayEvent1}>
                <div className={styles.springBreak2021}>Spring Break 2021!</div>
              </div>
              <div className={styles.dayHeader8}>
                <div className={styles.left8}>
                  <b className={styles.sunday}>SUNDAY</b>
                  <div className={styles.div26}>3/7/2021</div>
                </div>
                <div className={styles.right8}>
                  <div className={styles.temp8}>
                    <b className={styles.b8}>55º</b>
                    <div className={styles.div27}>/40º</div>
                  </div>
                  <img
                    className={styles.sunIcon5}
                    loading="lazy"
                    alt=""
                    src="/sun.svg"
                  />
                </div>
              </div>
              <div className={styles.allDayEvent2}>
                <div className={styles.springBreak20211}>
                  Spring Break 2021!
                </div>
              </div>
              <div className={styles.dayHeader9}>
                <div className={styles.left9}>
                  <b className={styles.monday1}>MONDAY</b>
                  <div className={styles.div28}>3/8/2021</div>
                </div>
                <div className={styles.right9}>
                  <div className={styles.temp9}>
                    <b className={styles.b9}>55º</b>
                    <div className={styles.div29}>/40º</div>
                  </div>
                  <img
                    className={styles.sunIcon6}
                    loading="lazy"
                    alt=""
                    src="/sun.svg"
                  />
                </div>
              </div>
              <div className={styles.allDayEvent3}>
                <div className={styles.springBreak20212}>
                  Spring Break 2021!
                </div>
              </div>
              <div className={styles.frameParent25}>
                <div className={styles.frameParent26}>
                  <div className={styles.ellipseWrapper8}>
                    <div className={styles.frameChild7} />
                  </div>
                  <div className={styles.startParent1}>
                    <div className={styles.start11}>8:30</div>
                    <div className={styles.div30}>–</div>
                  </div>
                  <div className={styles.end11}>9:00</div>
                  <div className={styles.ampm11}>AM</div>
                  <div className={styles.videoCameraWrapper7}>
                    <img
                      className={styles.videoCameraIcon11}
                      loading="lazy"
                      alt=""
                      src="/videocamera.svg"
                    />
                  </div>
                </div>
                <div className={styles.meetingToTalkAboutRossConContainer}>
                  <div
                    className={styles.meetingToTalk1}
                  >{`Meeting to talk about Ross contract. `}</div>
                </div>
              </div>
              <div className={styles.frameParent27}>
                <div className={styles.frameParent28}>
                  <div className={styles.ellipseWrapper9}>
                    <div className={styles.frameChild8} />
                  </div>
                  <div className={styles.startParent2}>
                    <div className={styles.start12}>8:30</div>
                    <div className={styles.div31}>–</div>
                  </div>
                  <div className={styles.end12}>9:00</div>
                  <div className={styles.ampm12}>AM</div>
                  <div className={styles.videoCameraWrapper8}>
                    <img
                      className={styles.videoCameraIcon12}
                      loading="lazy"
                      alt=""
                      src="/videocamera.svg"
                    />
                  </div>
                </div>
                <div className={styles.meetingToTalkAboutRossConFrame}>
                  <div
                    className={styles.meetingToTalk2}
                  >{`Meeting to talk about Ross contract. `}</div>
                </div>
              </div>
              <div className={styles.dayHeader10}>
                <div className={styles.left10}>
                  <b className={styles.tuesday1}>TUESDAY</b>
                  <div className={styles.div32}>3/9/2021</div>
                </div>
                <div className={styles.right10}>
                  <div className={styles.temp10}>
                    <b className={styles.b10}>55º</b>
                    <div className={styles.div33}>/40º</div>
                  </div>
                  <img
                    className={styles.sunIcon7}
                    loading="lazy"
                    alt=""
                    src="/sun.svg"
                  />
                </div>
              </div>
              <div className={styles.allDayEvent4}>
                <div className={styles.springBreak20213}>
                  Spring Break 2021!
                </div>
              </div>
              <div className={styles.frameParent29}>
                <div className={styles.frameParent30}>
                  <div className={styles.ellipseWrapper10}>
                    <div className={styles.frameChild9} />
                  </div>
                  <div className={styles.startParent3}>
                    <div className={styles.start13}>8:30</div>
                    <div className={styles.div34}>–</div>
                  </div>
                  <div className={styles.end13}>9:00</div>
                  <div className={styles.ampm13}>AM</div>
                  <div className={styles.videoCameraWrapper9}>
                    <img
                      className={styles.videoCameraIcon13}
                      loading="lazy"
                      alt=""
                      src="/videocamera.svg"
                    />
                  </div>
                </div>
                <div className={styles.quarterlyReviewContainer}>
                  <div className={styles.quarterlyReview1}>
                    Quarterly review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.calendarBaseWrapper}>
          <form className={styles.calendarBase}>
            <div className={styles.header1}>
              <div className={styles.arrows}>
                <div className={styles.iconButton1}>
                  <div className={styles.iconButtonMaster1}>
                    <img
                      className={styles.icon1}
                      loading="lazy"
                      alt=""
                      src="/icon-1.svg"
                    />
                  </div>
                </div>
                <button className={styles.button}>
                  <div className={styles.buttonMaster}>
                    <img className={styles.icon2} alt="" src="/icon.svg" />
                    <div className={styles.text}>Today</div>
                    <img className={styles.icon3} alt="" src="/icon1.svg" />
                  </div>
                </button>
                <div className={styles.iconButton2}>
                  <div className={styles.iconButtonMaster2}>
                    <img
                      className={styles.icon4}
                      loading="lazy"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.dayToggle1}>
                <div className={styles.button1}>
                  <div className={styles.buttonMaster1}>
                    <img className={styles.icon5} alt="" src="/icon.svg" />
                    <div className={styles.hourRow}>Day</div>
                    <img className={styles.icon6} alt="" src="/icon1.svg" />
                  </div>
                </div>
                <button className={styles.button2}>
                  <div className={styles.buttonMaster2}>
                    <img className={styles.icon7} alt="" src="/icon.svg" />
                    <div className={styles.text1}>Week</div>
                    <img className={styles.icon8} alt="" src="/icon1.svg" />
                  </div>
                </button>
                <div className={styles.button3}>
                  <div className={styles.buttonMaster3}>
                    <img className={styles.icon9} alt="" src="/icon.svg" />
                    <div className={styles.text2}>Month</div>
                    <img className={styles.icon10} alt="" src="/icon1.svg" />
                  </div>
                </div>
                <div className={styles.button4}>
                  <div className={styles.buttonMaster4}>
                    <img className={styles.icon11} alt="" src="/icon.svg" />
                    <div className={styles.text3}>Year</div>
                    <img className={styles.icon12} alt="" src="/icon1.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.fieldMaster2}>
                  <img className={styles.icon13} alt="" src="/icon-3.svg" />
                  <input
                    className={styles.search}
                    placeholder="Search"
                    type="text"
                  />
                  <img className={styles.icon14} alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
            <div className={styles.innerStack}>
              <div className={styles.weekDays}>
                <div className={styles.days}>
                  <Day sUN="SUN" emptyPlaceholder="21" />
                  <Day
                    sUN="MON"
                    emptyPlaceholder="22"
                    propBackgroundColor="#fff"
                    propBoxShadow="-1px -1px 0px #e0e0e0 inset"
                    propOverflow="unset"
                    propWidth="unset"
                    propBorder="unset"
                    propOutline="unset"
                    propBackgroundColor1="unset"
                    propHeight="unset"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <Day
                    sUN="TUE"
                    emptyPlaceholder="23"
                    propBackgroundColor="#fff"
                    propBoxShadow="-1px -1px 0px #e0e0e0 inset"
                    propOverflow="unset"
                    propWidth="unset"
                    propBorder="unset"
                    propOutline="unset"
                    propBackgroundColor1="unset"
                    propHeight="unset"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <Day
                    sUN="WED"
                    emptyPlaceholder="24"
                    propBackgroundColor="#fff"
                    propBoxShadow="-1px -1px 0px #e0e0e0 inset"
                    propOverflow="unset"
                    propWidth="100%"
                    propBorder="none"
                    propOutline="none"
                    propBackgroundColor1="transparent"
                    propHeight="32px"
                    propDisplay="flex"
                    propMinWidth="77px"
                  />
                  <Day
                    sUN="THU"
                    emptyPlaceholder="25"
                    propBackgroundColor="#eff6ff"
                    propBoxShadow="-1px -1px 0px #e0e0e0 inset"
                    propOverflow="unset"
                    propWidth="unset"
                    propBorder="unset"
                    propOutline="unset"
                    propBackgroundColor1="unset"
                    propHeight="unset"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <Day
                    sUN="FRI"
                    emptyPlaceholder="26"
                    propBackgroundColor="#fff"
                    propBoxShadow="-1px -1px 0px #e0e0e0 inset"
                    propOverflow="unset"
                    propWidth="unset"
                    propBorder="unset"
                    propOutline="unset"
                    propBackgroundColor1="unset"
                    propHeight="unset"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <Day
                    sUN="SAT"
                    emptyPlaceholder="27"
                    propBackgroundColor="#fafafa"
                    propBoxShadow="0px -1px 0px #e0e0e0 inset"
                    propOverflow="hidden"
                    propWidth="100%"
                    propBorder="none"
                    propOutline="none"
                    propBackgroundColor1="transparent"
                    propHeight="32px"
                    propDisplay="flex"
                    propMinWidth="77px"
                  />
                </div>
                <div className={styles.estGmt5}>
                  <p className={styles.est}>EST</p>
                  <p className={styles.gmt5}>GMT-5</p>
                </div>
              </div>
              <HourRow1 />
              <HourRow
                time="8 AM"
                time1="8 AM"
                propWidth="36px"
                propDisplay="flex"
                propWidth1="36px"
                propDisplay1="flex"
              />
              <HourRow
                time="9 AM"
                time1="9 AM"
                propWidth="36px"
                propDisplay="flex"
                propWidth1="36px"
                propDisplay1="flex"
              />
              <HourRow
                time="10 AM"
                time1="10 AM"
                propWidth="unset"
                propDisplay="inline-block"
                propWidth1="unset"
                propDisplay1="inline-block"
              />
              <HourRow
                time="11 AM"
                time1="11 AM"
                propWidth="unset"
                propDisplay="inline-block"
                propWidth1="unset"
                propDisplay1="inline-block"
              />
              <HourRow
                time="12 PM"
                time1="12 PM"
                propWidth="unset"
                propDisplay="inline-block"
                propWidth1="unset"
                propDisplay1="inline-block"
              />
              <HourRow
                time="1 PM"
                time1="1 PM"
                propWidth="36px"
                propDisplay="flex"
                propWidth1="36px"
                propDisplay1="flex"
              />
              <HourRow
                time="2 PM"
                time1="2 PM"
                propWidth="36px"
                propDisplay="flex"
                propWidth1="36px"
                propDisplay1="flex"
              />
              <HourRow
                time="3 PM"
                time1="3 PM"
                propWidth="36px"
                propDisplay="flex"
                propWidth1="36px"
                propDisplay1="flex"
              />
              <HourRow
                time="4 PM"
                time1="4 PM"
                propWidth="36px"
                propDisplay="flex"
                propWidth1="36px"
                propDisplay1="flex"
              />
              <HourRow
                time="5 PM"
                time1="5 PM"
                propWidth="36px"
                propDisplay="flex"
                propWidth1="36px"
                propDisplay1="flex"
              />
            </div>
            <Event1
              end="8:00"
              aMPM="AM"
              videoCamera="/videocamera-14.svg"
              end1="Monday Wake-Up Hour"
              bar={false}
              showHour
            />
            <Event1
              end="9:00"
              aMPM="AM"
              videoCamera="/videocamera-14.svg"
              end1="All-Team Kickoff"
              bar={false}
              showHour={false}
              propHeight="unset"
              propTop="262px"
              propBackgroundColor="rgba(14, 165, 233, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="unset"
              propLeft="207px"
              propRight="unset"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#0ea5e9"
              propHeight1="unset"
              propAlignSelf1="unset"
              propPadding1="var(--padding-7xs) var(--padding-7xs) var(--padding-11xl)"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#0369a1"
              propColor1="#0369a1"
              propBackgroundColor2="#0369a1"
              propWidth1="unset"
              propDisplay="inline-block"
              propAlignSelf3="stretch"
              propColor2="#0369a1"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="10:00"
              aMPM="AM"
              videoCamera="/videocamera-14.svg"
              end1="Financial Update"
              bar={false}
              showHour
              propHeight="68px"
              propTop="334px"
              propBackgroundColor="rgba(14, 165, 233, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="unset"
              propLeft="207px"
              propRight="unset"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#0ea5e9"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#0369a1"
              propColor1="#0369a1"
              propBackgroundColor2="#0369a1"
              propWidth1="unset"
              propDisplay="inline-block"
              propAlignSelf3="stretch"
              propColor2="#0369a1"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="11:00"
              aMPM="AM"
              videoCamera="/videocamera-14.svg"
              end1="🍔 New Employee Welcome Lunch!"
              bar={false}
              showHour={false}
              propHeight="unset"
              propTop="unset"
              propBackgroundColor="rgba(139, 92, 246, 0.1)"
              propPadding="0px 0px var(--padding-53xl) var(--padding-10xs)"
              propBottom="358px"
              propLeft="207px"
              propRight="unset"
              propWidth="143px"
              propAlignSelf="unset"
              propBackgroundColor1="#8b5cf6"
              propHeight1="140px"
              propAlignSelf1="unset"
              propPadding1="var(--padding-7xs) var(--padding-7xs) var(--padding-sm)"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#6d28d9"
              propColor1="#6d28d9"
              propBackgroundColor2="#0369a1"
              propWidth1="128px"
              propDisplay="flex"
              propAlignSelf3="unset"
              propColor2="#6d28d9"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="1:00"
              aMPM="PM"
              videoCamera="/videocamera-14.svg"
              end1="Design Review"
              bar={false}
              showHour
              propHeight="68px"
              propTop="unset"
              propBackgroundColor="rgba(14, 165, 233, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="286px"
              propLeft="207px"
              propRight="unset"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#0ea5e9"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#0369a1"
              propColor1="#0369a1"
              propBackgroundColor2="#0369a1"
              propWidth1="unset"
              propDisplay="inline-block"
              propAlignSelf3="stretch"
              propColor2="#0369a1"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="1:00"
              aMPM="PM"
              videoCamera="/videocamera-14.svg"
              end1="Design Review"
              bar={false}
              showHour
              propHeight="68px"
              propTop="unset"
              propBackgroundColor="rgba(14, 165, 233, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="286px"
              propLeft="unset"
              propRight="356px"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#0ea5e9"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#0369a1"
              propColor1="#0369a1"
              propBackgroundColor2="#0369a1"
              propWidth1="unset"
              propDisplay="inline-block"
              propAlignSelf3="stretch"
              propColor2="#0369a1"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="2:00"
              aMPM="PM"
              videoCamera="/videocamera-20.svg"
              end1="1:1 with Jon"
              bar={false}
              showHour
              propHeight="68px"
              propTop="unset"
              propBackgroundColor="rgba(245, 158, 11, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="214px"
              propLeft="207px"
              propRight="unset"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#f59e0b"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#b45309"
              propColor1="#b45309"
              propBackgroundColor2="#b45309"
              propWidth1="unset"
              propDisplay="inline-block"
              propAlignSelf3="stretch"
              propColor2="#b45309"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="2:00"
              aMPM="PM"
              videoCamera="/videocamera-20.svg"
              end1="1:1 with Heather"
              bar={false}
              showHour
              propHeight="68px"
              propTop="unset"
              propBackgroundColor="rgba(245, 158, 11, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="214px"
              propLeft="unset"
              propRight="212px"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#f59e0b"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#b45309"
              propColor1="#b45309"
              propBackgroundColor2="#b45309"
              propWidth1="unset"
              propDisplay="inline-block"
              propAlignSelf3="stretch"
              propColor2="#b45309"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="4:00"
              aMPM="PM"
              videoCamera="/videocamera-22.svg"
              end1="🍻 Design Team Happy Hour"
              bar
              showHour
              propHeight="68px"
              propTop="unset"
              propBackgroundColor="#ffe4e6"
              propPadding="unset"
              propBottom="70px"
              propLeft="351px"
              propRight="unset"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#f43f5e"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#be123c"
              propColor1="#be123c"
              propBackgroundColor2="#be123c"
              propWidth1="128px"
              propDisplay="flex"
              propAlignSelf3="unset"
              propColor2="#be123c"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="4:00"
              aMPM="PM"
              videoCamera="/videocamera-22.svg"
              end1="🍷 Happy Hour"
              bar
              showHour
              propHeight="68px"
              propTop="unset"
              propBackgroundColor="#ffe4e6"
              propPadding="unset"
              propBottom="70px"
              propLeft="unset"
              propRight="212px"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#f43f5e"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#be123c"
              propColor1="#be123c"
              propBackgroundColor2="#be123c"
              propWidth1="unset"
              propDisplay="inline-block"
              propAlignSelf3="stretch"
              propColor2="#be123c"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="12:00"
              aMPM="PM"
              videoCamera="/videocamera-14.svg"
              end1="🍔 Design System Kickoff Lunch"
              bar={false}
              showHour
              propHeight="68px"
              propTop="unset"
              propBackgroundColor="rgba(14, 165, 233, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="358px"
              propLeft="351px"
              propRight="unset"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#0ea5e9"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#0369a1"
              propColor1="#0369a1"
              propBackgroundColor2="#0369a1"
              propWidth1="128px"
              propDisplay="flex"
              propAlignSelf3="unset"
              propColor2="#0369a1"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="12:00"
              aMPM="PM"
              videoCamera="/videocamera-14.svg"
              end1="🥗 Marketing Meet-and-Greet"
              bar={false}
              showHour
              propHeight="68px"
              propTop="unset"
              propBackgroundColor="rgba(14, 165, 233, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="358px"
              propLeft="unset"
              propRight="212px"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#0ea5e9"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#0369a1"
              propColor1="#0369a1"
              propBackgroundColor2="#0369a1"
              propWidth1="128px"
              propDisplay="flex"
              propAlignSelf3="unset"
              propColor2="#0369a1"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="9:00"
              aMPM="AM"
              videoCamera="/videocamera-14.svg"
              end1="Design Review: Acme Marketi..."
              bar={false}
              showHour={false}
              propHeight="unset"
              propTop="262px"
              propBackgroundColor="rgba(14, 165, 233, 0.1)"
              propPadding="0px 0px var(--padding-55xl) var(--padding-10xs)"
              propBottom="unset"
              propLeft="351px"
              propRight="unset"
              propWidth="71px"
              propAlignSelf="unset"
              propBackgroundColor1="#0ea5e9"
              propHeight1="142px"
              propAlignSelf1="unset"
              propPadding1="var(--padding-7xs) var(--padding-7xs) var(--padding-27xl)"
              propFlexDirection="row"
              propPosition="relative"
              propAlignSelf2="unset"
              propFlex="1"
              propColor="#0369a1"
              propColor1="#0369a1"
              propBackgroundColor2="#0369a1"
              propWidth1="unset"
              propDisplay="inline-block"
              propAlignSelf3="unset"
              propColor2="#0369a1"
              propPosition1="absolute"
              propFlex1="1"
              propMargin="0 !important"
              propBottom1="-18px"
              propLeft1="6px"
            />
            <Event1
              end="9:00"
              aMPM="AM"
              videoCamera="/videocamera-14.svg"
              end1="Webinar: Figma ..."
              bar={false}
              showHour={false}
              propHeight="unset"
              propTop="262px"
              propBackgroundColor="rgba(16, 185, 129, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="unset"
              propLeft="423px"
              propRight="unset"
              propWidth="71px"
              propAlignSelf="stretch"
              propBackgroundColor1="#10b981"
              propHeight1="unset"
              propAlignSelf1="unset"
              propPadding1="var(--padding-7xs) var(--padding-7xs) var(--padding-sm)"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#047857"
              propColor1="#047857"
              propBackgroundColor2="#0369a1"
              propWidth1="56px"
              propDisplay="flex"
              propAlignSelf3="unset"
              propColor2="#047857"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="9:00"
              aMPM="AM"
              videoCamera="/videocamera-14.svg"
              end1="☕️ Coffee Chat"
              bar={false}
              showHour
              propHeight="68px"
              propTop="262px"
              propBackgroundColor="rgba(14, 165, 233, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="unset"
              propLeft="496px"
              propRight="unset"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#0ea5e9"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#0369a1"
              propColor1="#0369a1"
              propBackgroundColor2="#0369a1"
              propWidth1="unset"
              propDisplay="inline-block"
              propAlignSelf3="stretch"
              propColor2="#0369a1"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="9:00"
              aMPM="AM"
              videoCamera="/videocamera-14.svg"
              end1="☕️ Coffee Chat"
              bar={false}
              showHour
              propHeight="68px"
              propTop="262px"
              propBackgroundColor="rgba(14, 165, 233, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="unset"
              propLeft="unset"
              propRight="212px"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#0ea5e9"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#0369a1"
              propColor1="#0369a1"
              propBackgroundColor2="#0369a1"
              propWidth1="unset"
              propDisplay="inline-block"
              propAlignSelf3="stretch"
              propColor2="#0369a1"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="11:00"
              aMPM="AM"
              videoCamera="/videocamera-30.svg"
              end1="Onboarding Presentation"
              bar={false}
              showHour
              propHeight="68px"
              propTop="406px"
              propBackgroundColor="rgba(139, 92, 246, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="unset"
              propLeft="496px"
              propRight="unset"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#8b5cf6"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#6d28d9"
              propColor1="#6d28d9"
              propBackgroundColor2="#6d28d9"
              propWidth1="128px"
              propDisplay="flex"
              propAlignSelf3="unset"
              propColor2="#6d28d9"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="10:00"
              aMPM="AM"
              videoCamera="/videocamera-30.svg"
              end1="Health Benefits Walkthrough"
              bar={false}
              showHour
              propHeight="68px"
              propTop="334px"
              propBackgroundColor="rgba(139, 92, 246, 0.1)"
              propPadding="0px 0px 0px var(--padding-10xs)"
              propBottom="unset"
              propLeft="unset"
              propRight="356px"
              propWidth="143px"
              propAlignSelf="stretch"
              propBackgroundColor1="#8b5cf6"
              propHeight1="unset"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#6d28d9"
              propColor1="#6d28d9"
              propBackgroundColor2="#6d28d9"
              propWidth1="128px"
              propDisplay="flex"
              propAlignSelf3="unset"
              propColor2="#6d28d9"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="2:00"
              aMPM="PM"
              videoCamera="/videocamera-14.svg"
              end1="Concept Design Review II"
              bar={false}
              showHour
              propHeight="142px"
              propTop="unset"
              propBackgroundColor="rgba(14, 165, 233, 0.1)"
              propPadding="0px 0px var(--padding-55xl) var(--padding-10xs)"
              propBottom="140px"
              propLeft="351px"
              propRight="unset"
              propWidth="143px"
              propAlignSelf="unset"
              propBackgroundColor1="#0ea5e9"
              propHeight1="142px"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#0369a1"
              propColor1="#0369a1"
              propBackgroundColor2="#0369a1"
              propWidth1="128px"
              propDisplay="flex"
              propAlignSelf3="unset"
              propColor2="#0369a1"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
            <Event1
              end="1:00"
              aMPM="PM"
              videoCamera="/videocamera-14.svg"
              end1="MVP Prioritization Workshop"
              bar={false}
              showHour
              propHeight="142px"
              propTop="unset"
              propBackgroundColor="rgba(14, 165, 233, 0.1)"
              propPadding="0px 0px var(--padding-55xl) var(--padding-10xs)"
              propBottom="212px"
              propLeft="496px"
              propRight="unset"
              propWidth="143px"
              propAlignSelf="unset"
              propBackgroundColor1="#0ea5e9"
              propHeight1="142px"
              propAlignSelf1="stretch"
              propPadding1="0px 6px"
              propFlexDirection="column"
              propPosition="unset"
              propAlignSelf2="stretch"
              propFlex="unset"
              propColor="#0369a1"
              propColor1="#0369a1"
              propBackgroundColor2="#0369a1"
              propWidth1="128px"
              propDisplay="flex"
              propAlignSelf3="unset"
              propColor2="#0369a1"
              propPosition1="relative"
              propFlex1="unset"
              propMargin="unset"
              propBottom1="unset"
              propLeft1="unset"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default TextInstance;
