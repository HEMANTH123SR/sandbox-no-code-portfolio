// "use client";
// import React, { useState, useEffect } from "react";
// import { useUser } from "@clerk/nextjs";
// import { UserDetailedObjectType } from "@/lib/interface";
// import { hackerMedium } from "@/fonts/font";
// import { MapPin, GraduationCap, Award } from "lucide-react";

// const MyPortfolio = () => {
//   const { isLoaded, user } = useUser();
//   const [linkedinData, setLinkedinData] =
//     useState<UserDetailedObjectType | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = [
//     { label: "Skills", content: "Tab one content" },
//     {
//       label: "Languages",
//       Content: "",
//     },
//     {
//       label: "Education",
//       Content: "Education tab",
//     },

//     {
//       label: "Certs",
//       Content: "",
//     },
//     {
//       label: "Others",
//       Content: "",
//     },
//   ];

//   useEffect(() => {
//     const fetchLinkedinData = async () => {
//       if (!user?.username) return;

//       try {
//         const response = await fetch("/api/get-linkedin-analysis", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             profileId: user.username,
//           }),
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch LinkedIn data");
//         }

//         const data = await response.json();
//         setLinkedinData(data.profileData);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Something went wrong");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (isLoaded && user?.username) {
//       fetchLinkedinData();
//     }
//   }, [isLoaded, user?.username]);

//   if (!isLoaded || isLoading) {
//     return (
//       <div className="flex w-full h-full justify-center items-center">
//         <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900" />
//         <span className="ml-2">Loading...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-lg mx-auto mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//         {error}
//       </div>
//     );
//   }

//   if (!linkedinData) {
//     return (
//       <div className="max-w-lg mx-auto mt-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
//         No LinkedIn data found.
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen max-w-screen-2xl justify-center items-center pt-16">
//       <div className=" flex flex-col   w-[50%]">
//         {/* user important detail */}
//         <div className="flex flex-col items-center py-10 ">
//           <img src={user?.imageUrl} className="h-28 w-28 rounded-full mb-4" />
//           <div className="flex flex-col items-center justify-center space-y-2">
//             <span style={hackerMedium.style} className="text-xl font-medium">
//               {linkedinData.linkedinUserName}
//             </span>
//             <span className="text-slate-500">{`@${linkedinData.firstName}`}</span>
//             <p className="text-center  max-w-[90%]">{linkedinData.headline}</p>
//           </div>
//           <div className="flex items-center justify-center space-x-6 mt-4 text-sm max-w-[90%]">
//             {linkedinData.about}

//             <div className="flex items-center space-x-1">
//               <MapPin className="w-4 h-4" strokeWidth={1.8} />
//               <span className="font-normal">
//                 {`Bengaluru, India`} {linkedinData.geo.full}
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="w-full bg-white ">
//           <div className="p-6">
//             <div
//               className="flex space-x-6 justify-center items-center border-b w-full"
//               style={hackerMedium.style}
//             >
//               {tabs.map((tab, index) => (
//                 <button
//                   key={index}
//                   className={`px-3 text-[0.8rem] py-2 uppercase transition-colors duration-200 ${
//                     activeTab === index
//                       ? "text-primary border-primary border-b-2"
//                       : "text-gray-500 hover:text-gray-700"
//                   }`}
//                   onClick={() => setActiveTab(index)}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="p-6">
//             {/* <div>{tabs[activeTab].content}</div> */}
//             {tabs[activeTab].label === "Skills" && (
//               <div className="space-y-6">
//                 {/* Languages */}
//                 <div className="bg-white rounded-lg shadow-sm p-6">
//                   <h2
//                     style={hackerMedium.style}
//                     className="text-lg font-semibold mb-4"
//                   >
//                     Skills
//                   </h2>
//                   {linkedinData.languages.map((language, index) => (
//                     <div key={index} className="mb-2 flex justify-between">
//                       <span>{language.name}</span>
//                       {language.proficiency && (
//                         <span className="text-gray-600 pl-3">
//                           {language.proficiency}
//                         </span>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//             {tabs[activeTab].label === "Languages" && (
//               <div className="space-y-6">
//                 {/* Languages */}
//                 <div className="bg-white rounded-lg shadow-sm p-6">
//                   <h2
//                     style={hackerMedium.style}
//                     className="text-lg font-semibold mb-4"
//                   >
//                     Languages
//                   </h2>
//                   {linkedinData.languages.map((language, index) => (
//                     <div key={index} className="mb-2 flex justify-between">
//                       <span>{language.name}</span>
//                       {language.proficiency && (
//                         <span className="text-gray-600 pl-3">
//                           {language.proficiency}
//                         </span>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//             {tabs[activeTab].label == "Education" && (
//               <div className="bg-white rounded-lg shadow-sm p-6">
//                 <h2
//                   style={hackerMedium.style}
//                   className="text-lg font-semibold mb-4"
//                 >
//                   <GraduationCap className="w-5 h-5 inline mr-2" />
//                   Education
//                 </h2>
//                 {linkedinData.educations &&
//                   linkedinData.educations.map((edu, index) => (
//                     <div key={index} className="mb-6 last:mb-0">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h3 className="font-medium">{edu.schoolName}</h3>
//                           <p className="text-gray-600">
//                             {edu.degree} {edu.fieldOfStudy}
//                           </p>
//                         </div>
//                         <span className="text-sm text-gray-500">
//                           {edu.start.year} - {edu.end.year || "Present"}
//                         </span>
//                       </div>
//                       {edu.description && (
//                         <p className="mt-2 text-gray-700">{edu.description}</p>
//                       )}
//                     </div>
//                   ))}
//               </div>
//             )}
//             {tabs[activeTab].label === "Certs" && (
//               <div className="">
//                 {linkedinData.certifications &&
//                   linkedinData.certifications.length > 0 && (
//                     <div className="bg-white rounded-lg shadow-sm p-6">
//                       <h2
//                         style={hackerMedium.style}
//                         className="text-lg font-semibold mb-4"
//                       >
//                         <Award className="w-5 h-5 inline mr-2" />
//                         Certifications
//                       </h2>
//                       {linkedinData.certifications.map((cert, index) => (
//                         <div key={index} className="mb-4 last:mb-0">
//                           <div className="flex justify-between items-start">
//                             <div>
//                               <h3 className="font-medium">{cert.name}</h3>
//                               <p className="text-gray-600">
//                                 {cert.company.name}
//                               </p>
//                             </div>
//                             <span className="text-sm text-gray-500">
//                               {cert.start.year}
//                               {cert.end.year && ` - ${cert.end.year}`}
//                             </span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyPortfolio;

"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { UserDetailedObjectType } from "@/lib/interface";
import { hackerMedium } from "@/fonts/font";
import { MapPin, GraduationCap, Award, Code, Globe, User2 } from "lucide-react";

const MyPortfolio = () => {
  const { isLoaded, user } = useUser();
  const [linkedinData, setLinkedinData] =
    useState<UserDetailedObjectType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Overview", icon: User2 },
    { label: "Skills", icon: Code },
    { label: "Languages", icon: Globe },
    { label: "Education", icon: GraduationCap },
    { label: "Certifications", icon: Award },
  ];

  useEffect(() => {
    const fetchLinkedinData = async () => {
      if (!user?.username) return;

      try {
        const response = await fetch("/api/get-linkedin-analysis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ profileId: user.username }),
        });

        if (!response.ok) throw new Error("Failed to fetch LinkedIn data");
        const data = await response.json();
        setLinkedinData(data.profileData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoaded && user?.username) {
      fetchLinkedinData();
    }
  }, [isLoaded, user?.username]);

  if (!isLoaded || isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
          <span className="text-lg text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto mt-8 max-w-lg rounded-lg bg-red-50 p-6 text-red-700">
        {error}
      </div>
    );
  }

  if (!linkedinData) {
    return (
      <div className="mx-auto mt-8 max-w-lg rounded-lg bg-blue-50 p-6 text-blue-700">
        No LinkedIn data found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Profile Header */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div className="relative h-32 bg-gradient-to-r from-blue-500/20 to-blue-600/10">
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
              <img
                src={user?.imageUrl}
                alt={linkedinData.linkedinUserName}
                className="h-32 w-32 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
          <div className="mt-20 px-6 pb-6 text-center">
            <h1
              className="mb-2 text-2xl font-bold text-gray-900"
              style={hackerMedium.style}
            >
              {linkedinData.linkedinUserName}
            </h1>
            <p className="text-gray-500">{`@${linkedinData.firstName}`}</p>
            <p className="mx-auto mt-2 max-w-2xl text-gray-600">
              {linkedinData.headline}
            </p>
            <div className="mt-4 flex items-center justify-center space-x-4 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{linkedinData.geo.full || "Bengaluru, India"}</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex justify-center space-x-8">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-2 px-4 py-4 transition-colors ${
                    activeTab === index
                      ? "border-b-2 border-blue-500 text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-8 space-y-6">
          {/* Skills Section */}
          {activeTab === 1 && (
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-6 flex items-center text-xl font-semibold text-gray-900">
                <Code className="mr-2 h-5 w-5" />
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {linkedinData.languages.map((skill, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-gray-50 p-4 transition-transform hover:-translate-y-1"
                  >
                    <h3 className="font-medium text-gray-900">{skill.name}</h3>
                    {skill.proficiency && (
                      <p className="mt-1 text-sm text-gray-600">
                        {skill.proficiency}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages Section */}
          {activeTab === 2 && (
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-6 flex items-center text-xl font-semibold text-gray-900">
                <Globe className="mr-2 h-5 w-5" />
                Languages
              </h2>
              <div className="space-y-4">
                {linkedinData.languages.map((language, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                  >
                    <span className="font-medium text-gray-900">
                      {language.name}
                    </span>
                    {language.proficiency && (
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
                        {language.proficiency}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {activeTab === 3 && (
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-6 flex items-center text-xl font-semibold text-gray-900">
                <GraduationCap className="mr-2 h-5 w-5" />
                Education
              </h2>
              <div className="space-y-6">
                {linkedinData.educations?.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-blue-500 pl-4 transition-transform hover:-translate-x-1"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {edu.schoolName}
                        </h3>
                        <p className="text-gray-600">
                          {edu.degree} {edu.fieldOfStudy}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {edu.start.year} - {edu.end.year || "Present"}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="mt-2 text-gray-600">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Section */}
          {activeTab === 4 && (
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-6 flex items-center text-xl font-semibold text-gray-900">
                <Award className="mr-2 h-5 w-5" />
                Certifications
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {linkedinData.certifications?.map((cert, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 p-4 transition-transform hover:-translate-y-1"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {cert.name}
                        </h3>
                        <p className="text-gray-600">{cert.company.name}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {cert.start.year}
                        {cert.end.year && ` - ${cert.end.year}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Overview Section */}
          {activeTab === 0 && (
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-6 flex items-center text-xl font-semibold text-gray-900">
                <User2 className="mr-2 h-5 w-5" />
                About
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {linkedinData.about}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
