import React,{Component} from 'react';
import {View,Text,Image,ScrollView,TextInput} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import { PricingCard } from 'react-native-elements';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

var tmp=[];
class ProductDetails extends Component
{
    constructor(props)
    {
        super(props);
        this.state={cart:[]};
    }
    renderStock()
    {
        if(this.props.navigation.state.params.product.Product_Stock > 0){
            return <Text style={{fontSize:responsiveFontSize(3),marginTop:responsiveHeight(1),marginRight:responsiveWidth(2)}}>In Stock</Text>
        }else{
            return <Text style={{fontSize:responsiveFontSize(3),marginTop:responsiveHeight(1),marginRight:responsiveWidth(2)}}>Outof Stock</Text>
        }
    }
    /*async getData()
    {
        var promise=await new Promise((resolve,reject)=>{
            fetch(`${API}checkOrder?productId=${this.props.navigation.state.params.product._id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json())
                .then((responseJson) => {
                    resolve(responseJson);
                }).catch((error) => {
                alert(error);
                reject(error);
            });
        });
        return promise;
    }
    async componentDidMount(){
        this.setState({ loading: true });
        await this.getData().then((rating)=>{
            this.setState({
                loading:false,
                rating
            })
        })
    }*/
    addToCart()
    {
        tmp.push(this.props.navigation.state.params.product._id);
        this.setState({cart:tmp})
    }
    render(){
        return(
            <ScrollView>
                <View style={{flex:1}}>
                <Card>
                    <CardSection>
                        <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
                        <Text style={Styles.productNameStyle}>{this.props.navigation.state.params.product.Product_Name}</Text>
                            {this.renderStock()}
                            </View>
                    </CardSection>
                    <CardSection>
                        <Image
                            source={{uri:this.props.navigation.state.params.product.Product_Image}}
                            style={{height:responsiveHeight(60),width:responsiveWidth(96),margin:responsiveHeight(1)}}/>
                    </CardSection>
                    <CardSection>
                        <PricingCard
                            color='#4f9deb'
                            title={this.props.navigation.state.params.product.Product_Company}
                            price={'Rs : '+this.props.navigation.state.params.product.Product_Price}
                            info={['User Rating', 'Basic Support', 'All Core Features']}
                            button={{ title: 'Add To Cart', icon: 'add-shopping-cart' }}
                            containerStyle={{width:responsiveWidth(96),margin:responsiveHeight(1)}}
                        />
                        {/*<Text style={Styles.productNameStyle}>Rs.{this.props.navigation.state.params.product.Product_Price}</Text>*/}
                    </CardSection>
                    <CardSection>
                        <Text style={Styles.productDescriptionStyle}>{this.props.navigation.state.params.product.Product_Description}</Text>
                    </CardSection>
                    <CardSection>
                    </CardSection>
                </Card>
                </View>
            </ScrollView>
        );
    }
}

const Styles={
    productNameStyle:{
        fontSize:responsiveFontSize(4),
        color:'black',
        marginLeft:responsiveWidth(1.5)
    },
    productDescriptionStyle:{
        fontSize:responsiveFontSize(2.5),
        color:'black',
        marginLeft:responsiveWidth(1.5)
    }
}

export default ProductDetails;