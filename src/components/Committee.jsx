import React from 'react'
import '../styles/common.css'
import '../styles/committee.css'

const members = [
  {name: "Abdulla Albalooshi", photo: false, bio: ""},
  {name: "Abdulla Alwheibi", photo: false, bio: ""},
  {name: "Amal Alhajeri", photo: false, bio: ""},
  {name: "Ameera Almuharrami", photo: "/assets/committee/AmeeraAlmuharrami.jpg", bio: "Mrs. Almuharrami is a Program and Partnerships Manager at the Emirates Foundation for Youth Development with a master's degree in diplomacy and international relations from Zayed University, graduating with distinction. She brings more than 13 years of experience in managing youth leadership programs, strategic planning and community engagement initiatives. Mrs. Almuharrami led the first and largest volunteer program in UAE history with more than 21,000 volunteers from more than 130 countries in an event at the World Games Abu Dhabi 2019, achieving the highest number of volunteer commitment at 80 percent on World Games record."},
  {name: "Aysha Al Jaberi", photo: "/assets/committee/AyshaAlJaberi.jpg", bio: "Dr. Aljaberi is the Senior Director of Sheikh Mohamed bin Zayed Community Programs. She provides oversight of the academic and administrative functions of the department. She has been a certified Clinical Scientist and served in different leadership roles in Abu Dhabi Healthcare Services Company, operations, research, and academia. She was the Director of Disease Prevention and Screening Center, as well as the Manager for the Ambulatory Health Services’ Main Laboratories in Abu Dhabi and Al Ain. Dr. Aljaberi is passionate about and contributed to the enhancing of the living quality of people of determination. She is also passionate about childhood and youth mentorship, and education."},
  {name: "Fatma Faisal Mohammed", photo: "/assets/committee/FatmaFaisalMohammed.jpg", bio: "Mrs. Mohammed is an IT Senior Director at Etisalat and a mother of three, bringing 26 years of diverse tech industry experience. Active in community service, she has attended notable events such as the 2019 Special Olympics and supported families with autistic children. She had also been a member of the SKMC Diabetic Centre Committee since 2007, responsible for organizing trips for Type I diabetic children from the UAE to attend the Friends for Life program in Orlando. Her proudest accomplishment is guiding her son, a Person of Determination, to graduating from college and succeeding professionally."},
  {name: "H.E. Abdulla Alkamali", photo: "/assets/committee/HEAbdulla Alkamali.jpeg", bio: ""},
  {name: "H.E. Matar Alnuaimi", photo: "/assets/committee/HEMatarAlnuaimi.jpg", bio: ""},
  {name: "Mansour Amer Lardhi", photo: "/assets/committee/MansourAmerLardhi.bmp", bio: "Mr. Lardhi is the Chief News Editor for the Emirates New Agency (WAM) and was a journalist for the National Media Council for over thirty years."},
  {name: "Mariam Al Mazrouei", photo: false, bio: ""},
  {name: "Maryam Altamimi", photo: "/assets/committee/MaryamAltamimi.JPG", bio: "Mrs. Altamimi is a Dental Hygienist at Healthpoint, bringing with her 6 years of clinical expertise. She holds a bachelor's degree in applied science in Dental Hygiene. Mrs. Altamimi also holds the position of Special Smiles Clinical Director for the UAE Special Olympics."},
  {name: "Nader Haffar", photo: "/assets/committee/NaderHaffar.jpeg", bio: "Mr. Haffar is a highly accomplished business leader with over 30 years of experience in Professional Services and Management Consulting across global, regional, and local markets. He is currently the Co-Founder and Chairman of VALYOO Holding and was previously the Chairman and CEO of KPMG in the UAE and Oman and Chairman of KPMG Middle East, South Asia and Caspin Countries (MESAC). Mr. Haffar is a dedicated philanthropist, actively engaging in corporate social responsibility activities that contribute to the betterment of communities and is passionate about fostering gender equality."},
  {name: "Nawal Alnasser", photo: "/assets/committee/NawalAlnasser.png", bio: "Mrs. Nasser is a Founding Member and Vice Chairperson of the Emirates Down Syndrome Association with an extensive background in finance. She is the mother of Abdullah, a high achieving individual with Down syndrome who grew to successfully graduate from mainstream high school, enroll in one of the world’s best hospitality schools, and win many medals in the Special Olympics Abu Dhabi Games in 2018 and in national tournaments from 2018 to 2023. In recognition of her efforts, Mrs. Nasser received one of the most prestigious awards in the Middle East, the Princess Haya Award for Special Education as “Distinguished Board Member” 2014-2015. She was most recently awarded the 6th Sheikha Fatima bint Mubarak Programme for Excellence and Societal Intelligence Award 2021-2022, under Distinguished Mother category."},
  {name: "Omar Al Shami", photo: false, bio: "Omar is a Special Olympics Athlete and Ambassador. He proudly represented the United Arab Emirates at the Special Olympics World Games Abu Dhabi 2019 and won a gold medal in the swimming competition. Omar is also a member of the Special Olympics UAE’s Unified Youth Council, a Health Messenger advocating for swimming and fitness, works with the Unified Schools program, and speaks at large-scale events. Additionally, he was elected by his fellow Athlete Leaders to represent Special Olympics Middle East/North Africa as the Vice President of the Regional Athlete Leadership Input Council."},
  {name: "Omar Alshamsi", photo: false, bio: ""},
  {name: "Rashed Abdulla Ali", photo: "/assets/committee/RashedAbdullaAli.jpg", bio: "Mr. Ali is a senior management professional with over 11 years of experience in diverse roles across the organizational hierarchy. Before holding the role of CEO of the Al Ain Club Investment Company, he was general services manager of the Al Ain Club Investment Company and manager of the Hazza Bin Zayed Stadium, which was elected the best stadium in the world in 2014. From May 2005 to June 2013, he was deputy head of general services at the Emirates Centre for Strategic Studies and Research (ECSSR). A motivational leader and mentor of multicultural and cross-functional teams, he was also appointed COO of the Special Olympics World Games Abu Dhabi 2019."},
  {name: "Rulla Anees Naeem", photo: "/assets/committee/RullaAneesNaeem.jpg", bio: "Mrs. Naeem is the mother of Special Olympics Athlete and Ambassador, Omar Sharif Alshami. Having always been supportive of her son in the face of all challenges, she encourages parents to recognize their children’s abilities and to embrace inclusion. She hopes that more people across all communities will open their hearts to a world of talent and potential despite the difficulties they may face in life and the discouraging things people may say."},
  {name: "Shahad Albreiki", photo: "/assets/committee/ShahadAlbreiki.jpeg", bio: "Ms. Albreiki is a dedicated young woman who graduated from Zayed University with a bachelor’s degree in Media & Artistic Production. She is also a Person of Determination diagnosed with stage 4 cerebral palsy. Despite this, she is passionate for horse-riding and swimming, which reflects her unflinching determination that inspires others to overcome their challenges and proving that disabilities do not have to limit one’s potential. She aspires to establish her own media production company in the future."},
  {name: "Sharifa Yateem", photo: "/assets/committee/SharifaYateem.jpg", bio: "Mrs. Yateem is the Founding President of the Sharifa Yateem Centre for Rehabilitation. She is the first Emirati to be a Board-Certified Behaviour Analyst and a Certified Autism Specialist. She has extensive experience working with individuals of different age groups diagnosed with autism, as well as in training special educators, therapists, nannies, parents, siblings, and other personnel in all aspects of teaching children with autism. She also conducts educational and behavioural assessments, develops clinical and educational programming, and works with schools, nurseries, and centres in program implementation."},
  {name: "Sonia Al Hashemi", photo: "/assets/committee/SoniaAlHashemi.jpg", bio: "Mrs. Alhashmi is the Co-founder of the Emirates Down Syndrome Association and served as Chairperson of the association from 2007 to 2016. She is also the mother of Special Olympics Athlete Saif Alhashmi, who won over 40 medals in national and international swimming competitions worldwide and is now pursuing professional bowling. When her son, Saif, was diagnosed with Down syndrome, it became her mission at age 21 to raise awareness about children with Down syndrome and to shatter stigmas that often prevented those with Down syndrome from becoming productive members of society."},
]

const Committee = () => {
  return (
    <div id="committee">
        <h1>Executive Committee</h1>
        <div id="committee-members">
          {
            members.map((member) => (
              <div className="member" key={member.name}>
                <img src= {
                  member.photo ? member.photo : "./assets/committee/member.png"
                }
                alt={member.name}></img>
                <h3>{member.name}</h3>
                <p class="bio">{member.bio}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Committee;
