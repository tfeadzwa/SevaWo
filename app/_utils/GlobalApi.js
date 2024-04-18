const { gql, default: request } = require("graphql-request");
const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getAllCourseList = async () => {
  const query = gql`
    query MyQuery {
      courseLists {
        author
        name
        id
        free
        description
        demoUrl
        chapter {
          ... on Chapter {
            id
            name
            youtubeId
            video {
              url
            }
          }
        }
        totalChapters
        tag
        sourceCode
        slug
        banner {
          url
        }
      }
    }
  `;

  return await request(MASTER_URL, query);
};

const getSideBanners = async () => {
  const query = gql`
    query GetSideBanner {
      sideBanners {
        id
        name
        banner {
          id
          url
        }
        url
      }
    }
  `;

  return await request(MASTER_URL, query);
};

const getCourseById = async (courseId) => {
  const query =
    gql`
    query MyQuery {
      courseList(where: { slug: "` +
    courseId +
    `" }) {
        author
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            youtubeId
            video {
              url
            }
          }
        }
        demoUrl
        description
        free
        name
        slug
        tag
        totalChapters
        youtube
      }
    }
  `;

  return await request(MASTER_URL, query);
};

export default {
  getAllCourseList,
  getSideBanners,
  getCourseById,
};
