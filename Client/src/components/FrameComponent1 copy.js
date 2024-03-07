import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.computerScienceParent}>
      <div className={styles.computerScience}>Computer Science</div>
      <div className={styles.computerScience1}>
        <div className={styles.computerScienceChild} />
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle}>
            <div className={styles.label}>
              <img
                className={styles.arjunMehtaIcon}
                loading="lazy"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <div className={styles.inProgress}>
                <h1 className={styles.arjunMehta}>Arjun Mehta</h1>
              </div>
              <div className={styles.reminderFrame}>
                <div className={styles.applicationDeadlines}>
                  <div className={styles.branch}>Branch :</div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.branchLabelWrapper}>
                    <div className={styles.branchLabel}>
                      <div className={styles.collegeId}>College ID:</div>
                      <div className={styles.collegeID}>213108205</div>
                    </div>
                  </div>
                  <div className={styles.progressBarParent}>
                    <div className={styles.progressBar}>
                      <div className={styles.label1}>
                        <div className={styles.bar}>
                          <img
                            className={styles.progressBarIcon}
                            loading="lazy"
                            alt=""
                            src="/progress-bar.svg"
                          />
                          <div className={styles.spacer} />
                        </div>
                        <div className={styles.padding}>
                          <div className={styles.text}>Ideation</div>
                        </div>
                      </div>
                      <div className={styles.label2}>
                        <div className={styles.bar1}>
                          <img
                            className={styles.progressBarIcon1}
                            alt=""
                            src="/progress-bar-1.svg"
                          />
                          <div className={styles.spacer1} />
                        </div>
                        <div className={styles.padding1}>
                          <div className={styles.text1}>DESIGN</div>
                        </div>
                      </div>
                      <div className={styles.label3}>
                        <div className={styles.bar2}>
                          <img
                            className={styles.progressBarIcon2}
                            alt=""
                            src="/progress-bar1.svg"
                          />
                          <div className={styles.spacer2} />
                        </div>
                        <div className={styles.padding2}>
                          <div className={styles.text2}>HANDOFF</div>
                        </div>
                      </div>
                      <div className={styles.label4}>
                        <div className={styles.bar3}>
                          <img
                            className={styles.progressBarIcon3}
                            alt=""
                            src="/progress-bar1.svg"
                          />
                          <div className={styles.spacer3} />
                        </div>
                        <div className={styles.padding3}>
                          <div className={styles.text3}>READY</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.statusBar}>
                      <div className={styles.remindersGroupParent}>
                        <div className={styles.remindersGroup}>
                          <div className={styles.remindersGroupChild} />
                          <div className={styles.inProgress1}>In Progress</div>
                        </div>
                        <div className={styles.applicationDeadlineTime}>
                          34%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameGroup}>
              <div className={styles.innerFrame}>
                <div className={styles.labeledBarParent}>
                  <div className={styles.labeledBar}>
                    <h3 className={styles.reminders}>Reminders</h3>
                  </div>
                  <img
                    className={styles.notifIcon}
                    loading="lazy"
                    alt=""
                    src="/notif.svg"
                  />
                </div>
                <div className={styles.mainFrame}>
                  <div className={styles.mainFrameChild} />
                  <div className={styles.frameContainer}>
                    <img
                      className={styles.frameItem}
                      loading="lazy"
                      alt=""
                      src="/group-15-1.svg"
                    />
                    <div className={styles.applicationDeadlineParent}>
                      <b className={styles.applicationDeadline}>
                        Application Deadline
                      </b>
                      <div className={styles.am1200}>8:00 AM - 12:00 PM</div>
                    </div>
                  </div>
                  <div className={styles.notesPanel}>
                    <img
                      className={styles.moreVertical3Icon}
                      loading="lazy"
                      alt=""
                      src="/morevertical-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.listContainer}>
                  <div className={styles.verticalDivider} />
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/group-17-1@2x.png"
                    />
                    <div className={styles.interviewDateTime}>
                      <b className={styles.interviewScheduled}>
                        Interview Scheduled
                      </b>
                      <div className={styles.am12001}>8:00 AM - 12:00 PM</div>
                    </div>
                  </div>
                  <div className={styles.addlOptionsBtn}>
                    <img
                      className={styles.moreVertical4Icon}
                      loading="lazy"
                      alt=""
                      src="/morevertical-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <h2 className={styles.averageScore}>9.6 AVERAGE SCORE</h2>
          <div className={styles.comparisonText}>
            <div className={styles.betterThan86}>
              Better than 86% of students
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
