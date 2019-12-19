import React from 'react';

import {Text} from "react-native";

interface SomethingProps {
}

const Something: React.FC<SomethingProps> = (props: SomethingProps) => {
    return <Text>This is web?</Text>
};

export default Something;
