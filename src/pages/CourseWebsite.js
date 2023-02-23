import { useState } from "react";
import { Button, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./CourseWebsite.module.css";

const CourseWebsite = () => {
  const [office41ZawayaValue, setOffice41ZawayaValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.courseWebsite}>
        <div className={styles.homeCoursesDeals}>
          Home Courses Deals Success About Register
        </div>
        <div className={styles.proEdu}>Pro Edu</div>
        <button className={styles.registerParent}>
          <div className={styles.register}>Register</div>
          <Button
            className={styles.groupChild}
            sx={{ width: 150 }}
            variant="outlined"
            color="info"
          >
            Button
          </Button>
        </button>
        <img
          className={styles.courseWebsiteChild}
          alt=""
          src="../rectangle-23@2x.png"
        />
        <div className={styles.courseWebsiteItem} />
        <div className={styles.getStartedDigitalLearningParent}>
          <div className={styles.getStartedDigital}>
            Get Started Digital Learning
          </div>
          <div className={styles.itIsA}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
          <div className={styles.frameWrapper}>
            <Button
              className={styles.groupChild}
              variant="outlined"
              color="info"
              size="large"
            >
              Get Started
            </Button>
          </div>
        </div>
        <img className={styles.frameIcon} alt="" src="../group-10077.svg" />
        <img className={styles.frameIcon1} alt="" src="../frame3.svg" />
        <div className={styles.courseWebsiteInner} />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-64@2x.png"
        />
        <div className={styles.fundamentalOfUiuxDesignParent}>
          <div className={styles.fundamentalOfUiux}>
            Fundamental Of UI/UX Design
          </div>
          <div className={styles.price20}>Price : 20$</div>
          <div className={styles.someQuickExample}>
            Some quick example text to build on the card title and make up the
            bulk of the card.
          </div>
        </div>
        <div className={styles.rectangleDiv} />
        <img
          className={styles.courseWebsiteChild1}
          alt=""
          src="../rectangle-65@2x.png"
        />
        <div className={styles.javascriptBasicToAdvancedParent}>
          <div className={styles.fundamentalOfUiux}>
            Javascript Basic to advanced
          </div>
          <div className={styles.price20}>Price : 20$</div>
          <div className={styles.someQuickExample}>
            Some quick example text to build on the card title and make up the
            bulk of the card.
          </div>
        </div>
        <div className={styles.courseWebsiteChild2} />
        <img
          className={styles.courseWebsiteChild3}
          alt=""
          src="../rectangle-66@2x.png"
        />
        <div className={styles.fullstackWebDevelopmentParent}>
          <div className={styles.fundamentalOfUiux}>
            Fullstack Web Development
          </div>
          <div className={styles.price20}>Price : 20$</div>
          <div className={styles.someQuickExample}>
            Some quick example text to build on the card title and make up the
            bulk of the card.
          </div>
        </div>
        <div className={styles.courseWebsiteChild4} />
        <img
          className={styles.courseWebsiteChild5}
          alt=""
          src="../rectangle-612@2x.png"
        />
        <div className={styles.digitalMarketingParent}>
          <div className={styles.fundamentalOfUiux}>Digital Marketing</div>
          <div className={styles.price20}>Price : 20$</div>
          <div className={styles.someQuickExample}>
            Some quick example text to build on the card title and make up the
            bulk of the card.
          </div>
        </div>
        <div className={styles.courseWebsiteChild6} />
        <img
          className={styles.courseWebsiteChild7}
          alt=""
          src="../rectangle-613@2x.png"
        />
        <div className={styles.photographyBasicRulesParent}>
          <div className={styles.fundamentalOfUiux}>
            Photography Basic Rules
          </div>
          <div className={styles.price20}>Price : 20$</div>
          <div className={styles.someQuickExample}>
            Some quick example text to build on the card title and make up the
            bulk of the card.
          </div>
        </div>
        <div className={styles.courseWebsiteChild8} />
        <img
          className={styles.courseWebsiteChild9}
          alt=""
          src="../rectangle-614@2x.png"
        />
        <div className={styles.motionGraphicsParent}>
          <div className={styles.fundamentalOfUiux}>Motion Graphics</div>
          <div className={styles.price20}>Price : 20$</div>
          <div className={styles.someQuickExample}>
            Some quick example text to build on the card title and make up the
            bulk of the card.
          </div>
        </div>
        <div className={styles.discoverOurPopularCoursesParent}>
          <div className={styles.discoverOurPopular}>
            Discover Our Popular Courses
          </div>
          <div className={styles.itIsA1}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <Button className={styles.frameButton} variant="contained" color="info">
          See More Courses
        </Button>
        <div className={styles.courseWebsiteChild10} />
        <div className={styles.exploreTheElearningInstitutParent}>
          <div className={styles.exploreTheElearning}>
            Explore The elearning Institute
          </div>
          <div className={styles.thereAreManyContainer}>
            <p className={styles.thereAreMany}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure.
            </p>
            <p className={styles.thereAreMany}>&nbsp;</p>
            <p className={styles.anythingEmbarrassingHidden}>
              Anything embarrassing hidden in the middle of text. All the Lorem
              Ipsum generators on the Internet tend to repeat predefined.
            </p>
          </div>
          <Button
            className={styles.groupInner}
            variant="contained"
            color="info"
          >
            Read More
          </Button>
          <div className={styles.groupParent}>
            <div className={styles.onlineCourseParent}>
              <div className={styles.onlineCourse}>Online Course</div>
              <div className={styles.k}>3.2K+</div>
            </div>
            <div className={styles.expertMemberParent}>
              <div className={styles.onlineCourse}>Expert member</div>
              <div className={styles.div}>600+</div>
            </div>
            <div className={styles.ratingReviewParent}>
              <div className={styles.onlineCourse}>{`Rating & Review`}</div>
              <div className={styles.div}>1k+</div>
            </div>
          </div>
        </div>
        <img
          className={styles.courseWebsiteChild11}
          alt=""
          src="../rectangle-82@2x.png"
        />
        <div className={styles.someStudentsFeedback}>
          Some Students Feedback
        </div>
        <div className={styles.itIsA2}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
        <div className={styles.meetOurSuccessfull}>
          Meet Our Successfull Students
        </div>
        <div className={styles.itIsA3}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
        <div className={styles.courseWebsiteChild12} />
        <img
          className={styles.courseWebsiteChild13}
          alt=""
          src="../rectangle-615@2x.png"
        />
        <div className={styles.awladHossainParent}>
          <div className={styles.awladHossain}>Awlad Hossain</div>
          <div className={styles.uiuxDesigner}>UIUX Designer</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild1} />
          <img
            className={styles.groupChild2}
            alt=""
            src="../rectangle-616@2x.png"
          />
          <div className={styles.jannatulIslamParent}>
            <div className={styles.awladHossain}>Jannatul Islam</div>
            <div className={styles.uiuxDesigner}>Motion Design</div>
          </div>
        </div>
        <div className={styles.courseWebsiteChild14} />
        <img
          className={styles.courseWebsiteChild15}
          alt=""
          src="../rectangle-617@2x.png"
        />
        <div className={styles.imranHossainParent}>
          <div className={styles.awladHossain}>Imran Hossain</div>
          <div className={styles.uiuxDesigner}>Graphic Designer</div>
        </div>
        <div className={styles.courseWebsiteChild16} />
        <img
          className={styles.courseWebsiteChild17}
          alt=""
          src="../rectangle-618@2x.png"
        />
        <div className={styles.nishiAkterParent}>
          <div className={styles.awladHossain}>Nishi Akter</div>
          <div className={styles.uiuxDesigner}>Web Developer</div>
        </div>
        <div className={styles.courseWebsiteChild18} />
        <div className={styles.readyToJoinParent}>
          <Button
            className={styles.groupChild}
            variant="contained"
            color="info"
          >
            Ready to join?
          </Button>
          <div className={styles.itIsA4}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <Button
          className={styles.courseWebsiteChild19}
          variant="outlined"
          color="primary"
        >
          Register Now
        </Button>
        <div className={styles.frequentlyAskedQuestionsParent}>
          <div className={styles.frequentlyAskedQuestions}>
            Frequently Asked Questions
          </div>
          <div className={styles.itIsA5}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
          <div className={styles.thereAreManyVariationsOfPParent}>
            <div className={styles.thereAreMany1}>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the generators on the.
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild3} />
              <img
                className={styles.groupIcon}
                alt=""
                src="../group-10102.svg"
              />
              <div className={styles.whatOtherServices}>
                What other services are you compatible with?
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.groupChild4} />
              <img
                className={styles.groupIcon}
                alt=""
                src="../group-10132.svg"
              />
              <div className={styles.whatOtherServices}>
                I have a technical i need resolved, who do i email?
              </div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.groupChild4} />
              <img
                className={styles.groupIcon}
                alt=""
                src="../group-10132.svg"
              />
              <div className={styles.whatOtherServices}>
                What other services are you compatible with?
              </div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.groupChild4} />
              <img
                className={styles.groupIcon}
                alt=""
                src="../group-10132.svg"
              />
              <div className={styles.whatOtherServices}>
                What other services are you compatible with?
              </div>
            </div>
          </div>
        </div>
        <Button
          className={styles.courseWebsiteChild20}
          variant="contained"
          color="info"
        >
          View All
        </Button>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild10} />
          <img
            className={styles.groupChild11}
            alt=""
            src="../group-48794.svg"
          />
          <div className={styles.thereAreMany2}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem.
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.uiDesignerParent}>
              <div className={styles.uiDesigner}>UI Designer</div>
              <div className={styles.shantaAkter}>Awlad Hossain</div>
            </div>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1@2x.png"
            />
          </div>
          <div className={styles.rating}>
            <img
              className={styles.baseRatingIcon}
              alt=""
              src="../base-rating.svg"
            />
            <img
              className={styles.baseRatingIcon}
              alt=""
              src="../base-rating.svg"
            />
            <img
              className={styles.baseRatingIcon}
              alt=""
              src="../base-rating.svg"
            />
            <img
              className={styles.baseRatingIcon}
              alt=""
              src="../base-rating.svg"
            />
            <img
              className={styles.baseRatingIcon}
              alt=""
              src="../base-rating4.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild10} />
          <img
            className={styles.groupChild11}
            alt=""
            src="../group-48794.svg"
          />
          <div className={styles.thereAreMany2}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem.
          </div>
          <div className={styles.groupParent1}>
            <div className={styles.graphicDesignerParent}>
              <div className={styles.uiDesigner}>Graphic Designer</div>
              <div className={styles.shantaAkter}>Shanta Akter</div>
            </div>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-11@2x.png"
            />
          </div>
          <div className={styles.rating}>
            <img
              className={styles.baseRatingIcon}
              alt=""
              src="../base-rating.svg"
            />
            <img
              className={styles.baseRatingIcon}
              alt=""
              src="../base-rating.svg"
            />
            <img
              className={styles.baseRatingIcon}
              alt=""
              src="../base-rating.svg"
            />
            <img
              className={styles.baseRatingIcon}
              alt=""
              src="../base-rating.svg"
            />
            <img
              className={styles.baseRatingIcon}
              alt=""
              src="../base-rating4.svg"
            />
          </div>
        </div>
        <img
          className={styles.courseWebsiteChild21}
          alt=""
          src="../group-10090.svg"
        />
        <div className={styles.courseWebsiteChild22} />
        <div className={styles.groupParent2}>
          <img
            className={styles.groupChild15}
            alt=""
            src="../group-100612.svg"
          />
          <div className={styles.proEdu1}>Pro Edu</div>
          <div className={styles.office41ZawayaContainer}>
            <DateTimePicker
              label={`Office 41, Zawaya Buildin, Ghala Muscat, 
Sultanate of Oman`}
              value={office41ZawayaValue}
              onChange={(newValue) => {
                setOffice41ZawayaValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  variant="filled"
                  size="small"
                  helperText=""
                />
              )}
            />
          </div>
          <div className={styles.privacyPloicy}>
            Privacy Ploicy | Terms of use
          </div>
        </div>
        <div className={styles.trustedByOver}>
          Trusted by over 800+ companies
        </div>
        <img
          className={styles.courseWebsiteChild23}
          alt=""
          src="../group-10112.svg"
        />
      </div>
    </LocalizationProvider>
  );
};

export default CourseWebsite;
