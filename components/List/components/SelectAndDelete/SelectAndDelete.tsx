import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteMultiple } from '../../../../core/AsyncStorage';
import { setStateKeys } from '../../../../Redux/Slices/keys';
import { Style } from './Style';

export const SelectAndDelete = (props: any) => {

    const { setSelectAll, selectAll, pressed, keys } = props;

    const dispatch = useDispatch();

    const removeItems = async (key: string[]) => {
        dispatch(setStateKeys('Items eliminato'));
        await deleteMultiple(key);
        dispatch(setStateKeys(''));
        dispatch(setSelectAll([]));
    }

    const select = () => {
        let controllo: boolean = [...selectAll].sort().join(',') === [...keys].sort().join(',');
        if (!controllo) {
            dispatch(setSelectAll(keys));
        } else if (controllo) {
            dispatch(setSelectAll([]));
        }
    }


    return (
        <View>
            { pressed && <View style={Style.viewSelectAndDelete}>
                <TouchableOpacity style={Style.touchable} onPress={() => select()}>
                    <Text style={Style.touchableText} >Select all</Text>
                </TouchableOpacity>
                {selectAll.length !== 0 &&
                    <TouchableOpacity style={Style.touchable} onPress={() => removeItems(selectAll)}>
                        <Text style={Style.touchableText}>Delete</Text>
                    </TouchableOpacity>}
            </View>}
        </View>
    )
}