import garri from '../resources/garri.png'
import egusi from '../resources/egusi.jpg'
import yam from '../resources/yams.jpg'
import banana from '../resources/banana.jpg'
import plantain from '../resources/plantain.jpg'
import livesk1 from '../resources/livest1.jpg'
import grain1 from '../resources/grain2.jpg'
 const productArray = [
    {
        category:'Dairy Food',
        id:1,
        products:[
            {
                name:'Piglet',
                price:'122',
                quantity:'5',
                location:'Ngoundere',
                image:<img src={livesk1} alt="item"/>

            },
            {
               
                name:'CoCoa',
                price:'12573400',
                quantity:'5',
                location:'Ngoundere',
                image:<img src={yam} alt="item"/>
            },
            {
                
                name:'CoCoa',
                price:'123200',
                quantity:'5',
                location:'Ngoundere',
                image:<img src={yam} alt="item"/>
            },
            {
                name:'Piglet',
                price:'122',
                quantity:'5',
                location:'Ngoundere',
                image:<img src={livesk1} alt="item"/>

            },
            {
               
                name:'CoCoa',
                price:'12573400',
                quantity:'5',
                location:'Ngoundere',
                image:<img src={yam} alt="item"/>
            },

        ]
       

    },
   
   
    {
        category:'Vegetables',
        id:2,
        products:[
            {
                name:'HucleBerry',
                price:'190200',
                quantity:'5',
                location:'Yoalmu',
                image:<img src={garri} alt="item"></img>
                
            },
            {
              
                name:'Planatin',
                price:'45200',
                quantity:'4',
                location:'Bali',
                image:<img src={banana} alt="item"></img>
            },
            {
               
                name:'Beans',
                price:'1243200',
                quantity:'5',
                location:'Mayui',
                image:<img src={egusi} alt="item"></img>
            },
            {
              
                name:'Planatin',
                price:'45200',
                quantity:'4',
                location:'Bali',
                image:<img src={yam} alt="item"></img>
            },
            {
               
                name:'Beans',
                price:'1243200',
                quantity:'5',
                location:'Mayui',
                image:<img src={plantain} alt="item"></img>
            },
        ]
       
    },

    
   
    {
        category:'Proteins',
        id:3,
        products:[ 
            {
                name:'Beans',
                price:'122200',
                quantity:'5',
                location:'Mayui',
                image:<img src={grain1} alt="item"></img>
            },
            {
               
                name:'yam',
                price:'4500',
                quantity:'34',
                location:'2344',
                image:<img src={egusi} alt="item"></img>
            },
            {
                name:'Beans',
                price:'122200',
                quantity:'5',
                location:'Mayui',
                image:<img src={plantain} alt="item"></img>
            },
            {
               
                name:'yam',
                price:'4500',
                quantity:'34',
                location:'2344',
                image:<img src={egusi} alt="item"></img>
            },

        ]
      
    },
    {
        category:'Pasta',
        id:4,
        products:[ 
            {
                name:'Beans',
                price:'122200',
                quantity:'5',
                location:'Mayui',
                image:<img src={garri} alt="item"></img>
            },
            {
               
                name:'yam',
                price:'4500',
                quantity:'34',
                location:'2344',
                image:<img src={egusi} alt="item"></img>
            },
            {
                name:'Beans',
                price:'122200',
                quantity:'5',
                location:'Mayui',
                image:<img src={yam} alt="item"></img>
            },
            {
               
                name:'yam',
                price:'4500',
                quantity:'34',
                location:'2344',
                image:<img src={banana} alt="item"></img>
            },

        ]
      
    },
   
]

export default productArray;