declare module 'react-globe-component' {
    import React from 'react';

    interface GlobeSceneProps {
        lines?: object;
        map?: object;
    }

    export const GlobeScene: React.FC<GlobeSceneProps>;

}