import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout'
import ArchiveSidebar from '../components/archive/ArchiveSidebar'
import BreadCrumb from '../components/BreadCrumb'
import Pagination from '../components/archive/Pagination'
import PageHero from '../components/PageHero'

import {
    PageContent,
    StyledH2,
    StyledDate,
    StyledReadMore
} from './styles/archiveStyles'

const archiveTemplate = ({
    data: { file, allWordpressPost },
    pageContext: {
        catId,
        catName,
        catSlug,
        categories,
        humanPageNubmer,
        numberOfPages,
    }
}) => (
    <Layout>
        <PageHero img={file.childImageSharp.fluid}/>
        <BreadCrumb
            parent={{
                link: '/trends/inspiration',
                title: 'trends'
            }}
        />
        <div className="container">
            <div className="row" style={{ marginBottom: '40px' }}>
                <ArchiveSidebar catId={catId} categories={categories} />
                <PageContent className="col-lg-9">
                    <h1 dangerouslySetInnerHTML={{ __html: catName }} />
                    {allWordpressPost.edges.map(post => (
                        <article key={post.node.id} className="entry-content">
                            <Link to={`/trends/${post.node.slug}/`}>
                                <StyledH2 
                                    dangerouslySetInnerHTML={{ __html: post.node.title }}
                                />
                            </Link>
                            <StyledDate 
                                dangerouslySetInnerHTML={{ __html: post.node.date.replace(/\W+/g, ' '),
                                }}
                            />
                            <p 
                                dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                            />
                            <StyledReadMore to={`/trends/${post.node.slug}/`}>
                                Read More
                            </StyledReadMore>
                            <div className="dot_divider">
                                <hr />
                            </div>
                        </article>
                    ))}
                    <Pagination 
                        catSlug={catSlug}
                        page={humanPageNubmer}
                        totalPages={numberOfPages}
                    />
                </PageContent>
            </div>
        </div>
    </Layout>
)


export default archiveTemplate;

export const pageQuery = graphql`
    query($catId: String!, $skip: Int!, $limit: Int!) {
        allWordpressPost(
            filter: { categories: { elemMatch: { id: { eq: $catId } } } }
            skip: $skip
            limit: $limit
        ) {
            edges{
                node {
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "DD, MM, YYYY")
                }
            }
        }
        file(relativePath: { eq: "archive_headerImage.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 4000) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;