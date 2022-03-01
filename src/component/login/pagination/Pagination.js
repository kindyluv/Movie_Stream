import React, {useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import _ from "lodash";
import results from "../../movie/Result.json";
import {Box, List, ListItem, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {Text} from "@chakra-ui/layout";

const pageSize = 6

const Pagination = () => {
    const [posts, setPosts] = useState();
    const [paginatedPosts, setPaginatedPosts] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(res=>{
                console.log(res.data);
                setPosts(res.data);
                setPaginatedPosts(_(res.data).slice(0).take(pageSize).value());
            });
    }, [])

    const pageCount = posts? Math.ceil(posts.length/pageSize):0;
    if(pageCount === 1) return  null;
    const pages = _.range(1, pageCount + 1)

    const pagination =(pageNo)=>{
        setCurrentPage(pageNo);
        const startIndex = (pageNo -1)* pageSize;
        const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
        setPaginatedPosts(paginatedPost)
    }
    return (
        <Box>{
            !paginatedPosts ? ("No data found") : (
                <Table className="table">
                    <Thead>
                        <Tr>
                            <Th>Album ID</Th>
                            <Th>User ID</Th>
                            <Th>Title</Th>
                            <Th>Url</Th>
                            <Th>Thumbnail Url</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    {
                        paginatedPosts.map((post, index)=>(
                            <Tr key={index}>
                                <Td>{post.albumId}</Td>
                                <Td>{post.id}</Td>
                                <Td>{post.title}</Td>
                                <Td>{post.url}</Td>
                                <Td>{post.thumbnailUrl}</Td>
                                <Td>
                                    <p className={post.completed ? "btn btn-success" : "btn btn-danger"}>
                                        {post.completed ? "Completed" : "Pending"}
                                    </p>
                                </Td>
                            </Tr>
                        ))
                    }
                    </Tbody>
                </Table>
            )}
            <nau className={"d-flex justify-content-center"}>
                <List className={"pagination"} >
                    {
                        pages.map((page)=>(
                            <ListItem className={
                                page === currentPage ? "page-item active" : "page-item"}>
                                <Text className={"page-link"} onClick={()=>pagination(page)}>{page}</Text></ListItem>
                        ))
                    }
                </List>
            </nau>
        </Box>
    );
};

export default Pagination;
