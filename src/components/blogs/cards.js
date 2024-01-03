import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Box } from '@mui/material';
import BlogImgOne from '../../assets/blog_img_1.jpg';
import BlogImgTwo from '../../assets/blog_img_2.jpg';
import BlogImgThird from '../../assets/blog_img_3.jpg';
import { GoDotFill } from "react-icons/go";




const BlogCards = () => {

    const data = [
        {
            id: 0,
            image: BlogImgOne,
            tagText: 'BUSSINESS',
            text: '1 year ago',
            heading: '5 reasons to purchase desktop computers',
            content: 'Hustle and Cashflow is a blog that aims to educate millennials on personal finance.',

        },
        {
            id: 1,
            image: BlogImgTwo,
            tagText: 'BUSSINESS',
            text: '2 year ago',
            heading: 'Utilizing mobile technology in the field',
            content: 'Hustle and Cashflow is a blog that aims to educate millennials on personal finance.',

        },
        {
            id: 2,
            image: BlogImgThird,
            tagText: 'BEAUTY',
            text: '2 year ago',
            heading: 'Success Story: Businessman in Harlem',
            content: 'I think that you should be able to select more than one reason for rating.',

        },
    ]
    return (
        <>


            {
                data.map((item) => (
                    <Card sx={{ maxWidth: 330, boxShadow:'1px 1px 33px -16px grey', marginBottom:'20px' }}>

                        <Box sx={{
                            height: '200px',
                            overflow: 'hidden'
                        }}>
                            <img src={item.image} alt='screenshot' width='100%' />

                        </Box>
                        <CardContent>
                            <Typography variant='h6' sx={{
                                fontSize: '15px',
                                fontWeight: '700'
                            }}>
                                Philip Reyes
                                <Typography variant='para' sx={{
                                    color: '#00000080',
                                     marginLeft: '20px',
                                    fontSize: '12px'
                                }}>
                                    <GoDotFill />

                                </Typography>
                                <Typography variant='para' sx={{
                                    color: '#00000080',
                                    margin: '0px 20px',
                                    fontWeight: '400'
                                }}>
                                    {item.text}
                                </Typography>
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{
                                color:'#0e3f58',
                                fontSize:'23px',
                                fontWeight:'700',
                                padding:'18px 0px'
                            }}>
                                {item.heading}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize:'16px',
                                color:'grey',
                                paddingBottom:'15px'
                            }}>
                                {item.content}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }

        </>
    )
}

export default BlogCards
