import { z } from "zod";

const teamMemberSchema = z.object({
  slug: z.string(),
  name: z.string(),
  role: z.string(),
  group: z.enum(["Front Office", "Hygienists", "Assistants"]),
  image: z.string(),
  imageAlt: z.string(),
  tagline: z.string(),
  bio: z.array(z.string()).min(1),
  facts: z.array(z.string()),
});

export const teamMembers = z.array(teamMemberSchema).parse([
  {
    slug: "brenda",
    name: "Brenda",
    role: "Front Office",
    group: "Front Office",
    image: "/images/team/brenda.webp",
    imageAlt: "Portrait of Brenda, front office team member at West Hills Dental",
    tagline: "The first friendly face you will meet.",
    bio: [
      "Brenda has lived in Minot since 2013. She lives here with her husband, Stan.",
      "She has two wonderful adult children who are both married, and two beautiful grandchildren. In her spare time, Brenda enjoys being with her family. She also loves concerts and watching movies.",
      "Brenda loves getting to know our patients, answering their questions, and helping them take care of their dental needs.",
    ],
    facts: [
      "Lives in Minot with her husband, Stan",
      "Two adult children and two grandchildren",
      "Loves concerts, movies, and family time",
    ],
  },
  {
    slug: "emily",
    name: "Emily",
    role: "Registered Dental Hygienist",
    group: "Hygienists",
    image: "/images/team/emily.webp",
    imageAlt: "Portrait of Emily, registered dental hygienist at West Hills Dental",
    tagline: "A hygienist who teaches the next generation, too.",
    bio: [
      "Emily was born and raised in Minot, where she graduated from high school in 2013. She continued her education at the University of Minnesota, where she graduated Summa Cum Laude with a Bachelor of Science in Dental Hygiene in 2017.",
      "Upon graduation, Emily returned to Minot, where she loves to help patients improve their oral health and make people feel more comfortable in a dental setting. In addition to clinical dentistry, Emily teaches Dental Anatomy at Dakota College at Bottineau for Minot's dental assisting and dental hygiene school.",
      "Emily is married to her high school sweetheart, Justin, and they have two wonderful children, a daughter named Blair and a son named Burke. They also have a fur baby, a Bernedoodle named Benji. They love to spend time at Long Lake and travel as often as they can.",
    ],
    facts: [
      "Graduated Summa Cum Laude from the University of Minnesota",
      "Teaches Dental Anatomy at Dakota College at Bottineau",
      "Married to Justin; kids Blair and Burke; Bernedoodle Benji",
    ],
  },
  {
    slug: "glenda",
    name: "Glenda",
    role: "Front Office",
    group: "Front Office",
    image: "/images/team/glenda.webp",
    imageAlt: "Portrait of Glenda, front office team member at West Hills Dental",
    tagline: "Your insurance's least favorite opponent.",
    bio: [
      "Glenda was born and raised here in Minot. She is married to Brock and together they have a son, Grady, and a daughter, Hayden. They share their home with their beagle, Jax.",
      "Glenda enjoyed being a stay-at-home mom and daycare provider for 14 years. Once her kids started school, she was ready to return to work in the healthcare field, which she has always loved.",
      "Connecting with patients is Glenda's favorite part of working at West Hills Dental. She says, \u201cI also really enjoy battling insurance companies to make sure our patients' claims are paid!\u201d",
      "Outside of the office, Glenda enjoys reading, going to her kids' activities, traveling with family, and spending time at the lake.",
    ],
    facts: [
      "Married to Brock; kids Grady and Hayden; beagle Jax",
      "14 years as a stay-at-home mom and daycare provider",
      "Enjoys reading, travel, and lake days",
    ],
  },
  {
    slug: "lindsay",
    name: "Lindsay",
    role: "Registered Dental Assistant",
    group: "Assistants",
    image: "/images/team/lindsay.webp",
    imageAlt: "Portrait of Lindsay, registered dental assistant at West Hills Dental",
    tagline: "Caring for smiles, one relationship at a time.",
    bio: [
      "Lindsay is from Minot and graduated from the North Dakota State College of Science in 2001 with a certificate in Dental Assisting. She is currently enrolled at Valley City State University, getting her bachelor's degree in Career and Technical Education.",
      "She has two kids, Ava and Isaiah, and enjoys following them to their sporting events and school activities. She also enjoys cooking, baking, traveling, and online shopping.",
      "Lindsay's favorite part of dentistry is getting to know and build relationships with her patients. She greatly enjoys preserving and restoring the smiles of our patients.",
    ],
    facts: [
      "NDSCS Dental Assisting, class of 2001",
      "Studying at Valley City State University",
      "Kids Ava and Isaiah",
    ],
  },
  {
    slug: "mariah",
    name: "Mariah",
    role: "Registered Dental Hygienist",
    group: "Hygienists",
    image: "/images/team/mariah.webp",
    imageAlt: "Portrait of Mariah, registered dental hygienist at West Hills Dental",
    tagline: "A Montana ranch girl with a gentle touch.",
    bio: [
      "Mariah grew up on a ranch in central Montana, where she graduated high school in Harlowton, a small town near the beautiful Crazy Mountains.",
      "Mariah went on to attend college at Montana State University in Bozeman, where she studied Biology. She then completed her dental hygiene degree at MSU's program located in Great Falls, Montana. In her time at Montana State, she met her fianc\u00e9, who is originally from Carrington. The two of them now reside on a feedlot near Towner. She enjoys time outside of work doing anything with their horses, cattle, and two very spoiled dogs.",
      "Mariah truly enjoys meeting all of her patients and works to make it an enjoyable experience each time. She aspires to help everyone create a healthy smile to last a lifetime.",
    ],
    facts: [
      "Grew up near the Crazy Mountains in Montana",
      "Studied at Montana State University",
      "Lives near Towner with horses, cattle, and two dogs",
    ],
  },
  {
    slug: "mckenzie",
    name: "McKenzie",
    role: "Dental Assistant",
    group: "Assistants",
    image: "/images/team/mckenzie.webp",
    imageAlt: "Portrait of McKenzie, dental assistant at West Hills Dental",
    tagline: "Always learning something new.",
    bio: [
      "McKenzie is from the Mohall area and went to school online through the University of North Dakota for Dental Assisting. She lives in Minot with her significant other and their dog, Luna.",
      "She enjoys hobbies such as the outdoors, backpacking and camping, baking, cooking, and spending time with family.",
      "The most exciting part of dentistry for McKenzie is always learning something new and forming new relationships with patients.",
    ],
    facts: [
      "From the Mohall area",
      "Studied Dental Assisting online through UND",
      "Lives in Minot with her significant other and dog Luna",
    ],
  },
  {
    slug: "melinda",
    name: "Melinda",
    role: "Registered Dental Hygienist",
    group: "Hygienists",
    image: "/images/team/melinda.webp",
    imageAlt: "Portrait of Melinda, registered dental hygienist at West Hills Dental",
    tagline: "Making dental care make sense.",
    bio: [
      "Melinda hails from Minot. After graduating from Minot High, she took her talents south to the University of Arkansas Medical Sciences, where she earned her degree in dental hygiene in May 2003.",
      "Melinda's approach is as refreshing as a minty mouthwash. She loves to demystify dental care, breaking down the art of flossing, brushing, and mastering the Waterpik like a pro. Her enthusiasm for educating her patients means every appointment is not just a check-up, but a fun, informative experience.",
      "In 2016, Melinda made the heartfelt decision to return to Minot with her two adventurous children, Ella and Robbie. Family is everything to her, and she could not imagine raising her kids anywhere else. When she is not at the dental office, you can find Melinda cheering the loudest at school events, juggling after-school activities, or planning their next big family getaway.",
      "Whether she is brightening smiles in the clinic or filling her home with laughter, Melinda is dedicated to nurturing both healthy teeth and a vibrant family life.",
    ],
    facts: [
      "Minot High graduate",
      "Dental hygiene degree from the University of Arkansas Medical Sciences, 2003",
      "Returned to Minot in 2016 with Ella and Robbie",
    ],
  },
]);

export type TeamMember = z.infer<typeof teamMemberSchema>;
