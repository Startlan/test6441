var obj = JSON.parse($request.body),
    rm12306 = {};

"0007" == obj.placementNo ? (
    rm12306.materialsList = [{
        billMaterialsId: "6491",
        filePath: "rm12306",
        creativeType: 1
    }],
    rm12306.advertParam = {
        skipTime: 1
    },
    rm12306.code = "00"
) : rm12306 = "G0054" == obj.placementNo ? {
    code: "00",
    materialsList: [{}]
} : {
    code: "00",
    message: "无广告返回"
};

"undefined" != typeof $task ? 
    $done({body: JSON.stringify(rm12306)}) : 
    $done({response: {body: JSON.stringify(rm12306)}});