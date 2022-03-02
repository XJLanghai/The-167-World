function MyThree() {
    //场景
    this.scene = undefined;
    //渲染器
    this.renderer = undefined;
    //相机
    this.camera = undefined;
    //光源
    this.light = undefined;
    //元素
    this.elements = [];
 
    var width, height;
    //初始化渲染器
    this.initThree = function (element) {
        width = element.clientWidth;
        height = element.clientHeight;
        //生成渲染器对象（属性：抗锯齿效果为设置有效）
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            //alpha: true,
        });
        this.renderer.shadowMap.enabled = true;
        //this.renderer.setClearAlpha(0);
        //指定渲染器的高宽（和画布框大小一致）
        this.renderer.setSize(width, height);
        element.appendChild(this.renderer.domElement);
        //设置场景颜色 和透明度
        this.renderer.setClearColor(0x424242, 1);
    }
 
    //初始化相机
    this.initCamera = function (fov, x, y, z) {
        this.camera = new THREE.PerspectiveCamera(fov, width / height, 1, 10000);
        this.camera.position.x = x;
        //竖直
        this.camera.position.y = y;
        this.camera.position.z = z;
        this.camera.up.x = 0;//设置相机的上为「x」轴方向
        this.camera.up.y = 1;//设置相机的上为「y」轴方向
        this.camera.up.z = 0;//设置相机的上为「z」轴方向
        //设置视野的中心坐标
        this.camera.lookAt({
            x: 0,
            y: 0,
            z: 0
        });
    }
 
    //初始化场景
    this.initScene = function () {
        this.scene = new THREE.Scene();
        //this.scene.background = null;
    }
 
    //初始化灯光
    this.initLight = function (color) {
        //点光源
        this.light = new THREE.PointLight(0xffead1, 2.3);
        this.light.position.set(-50, 300, 500);
        this.light.castShadow = true;
        this.scene.add(this.light);
    }
    //加载模型
    this.loadObjWithMaterials = function (baseUrl, objName, materials, multiplyScalar) {
        var obj = {name: objName};
        if (!multiplyScalar) {
            multiplyScalar = 1;
        }
        var manager = new THREE.LoadingManager();
        var loader = new THREE.OBJLoader(manager);
        loader.setPath(baseUrl);
        if (materials) {
            //设置贴图
            loader.setMaterials(materials);
            obj.materials = materials;
        }
        //加载模型
        loader.load(objName, object=> {
            //显示比例
            object.scale.multiplyScalar(multiplyScalar);
            object.castShadow = true;
            //加入到页面中
            this.scene.add(object);
            obj.model = object;
            this.elements.push(obj)
        });
    }
    //加载模型
    this.loadObj = function (baseUrl, objName, mtlName) {
        if (mtlName) {
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath(baseUrl);
            mtlLoader.load(mtlName, materials=> {
                this.loadObjWithMaterials(baseUrl, objName, materials,1);
            });
        } else {
            this.loadObjWithMaterials(baseUrl, objName);
        }
 
    }
 
    //初始化基线
    this.initGrid = function (size, divisions) {
        var helper = new THREE.GridHelper(size, divisions);
        this.scene.add(helper);
    }
    this.initScene();
}
